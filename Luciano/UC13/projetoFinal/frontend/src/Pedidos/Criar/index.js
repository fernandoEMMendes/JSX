import { useState, useEffect } from "react"
import Modal from "react-modal"
import apiLocal from "../../API/apiLocal/api"

export default function CriarPedidosBalcao() {

    const [clientes, setClientes] = useState([""])
    const [clienteId, setClienteId] = useState("")

    const [categorias, setCategorias] = useState([""])
    const [CategoriasId, setCategoriasId] = useState("")

    const [produtos, setProdutos] = useState([""])
    const [produtosId, setProdutosId] = useState("")

    const [quant, setQuant] = useState("")

    const [pedNum, setPedNum] = useState("")
    const [observation, setObservation] = useState("")

    const [modalAberto, setModalAberto] = useState(false)

    const lsToken = localStorage.getItem("@tklogin2023")
    const token = JSON.parse(lsToken)

    useEffect(() => {
        async function verClientes() {
            const resposta = await apiLocal.get("/ListarClientes", {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            setClientes(resposta.data)
        }
        verClientes()
    }, [clientes])

    useEffect(() => {
        async function verCategorias() {
            const resposta = await apiLocal.get("/ListarCategorias")
            setCategorias(resposta.data)
        }
        verCategorias()
        return
    }, [categorias])

    useEffect(() => {

        if (CategoriasId === null || CategoriasId === "") {
            setProdutos([""])
            return
        }

        async function verProdutosCategoria() {
            const resposta = await apiLocal.get("/ListarProdutosCategoria", {
                categoriasId: CategoriasId
            })
            setProdutos(resposta.data)
        }
        verProdutosCategoria()
        return
    }, [categorias])

    async function abrirModal() {

        if (clienteId === "") {
            alert("Selecione um usuario")
            return
        }

        setModalAberto(true)
        const resposta = await apiLocal.post("/CriarPedidos", {
            clienteId
        })
        setPedNum(resposta.data)
    }

    async function fecharModalApagar(id) {

        await apiLocal.delete("/CancelarPedido", {
            data: {
                pedidoId: id
            }
        })
        
        await apiLocal.delete("/DeletarPedidos", {
            data: {
                pedidoId: id
            }
        })
        
        setModalAberto(false)
    }

    async function fecharModalAceitar(id, obs) {

        const rascunho = "Aguardando confirmação"

        await apiLocal.put("/ConfirmarPedidos", {
            pedidoId: id,
            novoObservacao: obs,
            novoDraft: false,
            novoRascunho: rascunho
        })

        setModalAberto(false)
    }

    async function adicionarProduto(id, prod, quantidade) {
        await apiLocal.post("/CriarPedidosItem", {
            produtoId: prod,
            quant: quantidade,
            pedidoId: id,
        })

        setQuant(null)
        setObservation(null)
    }

    return (
        <div>
            <h1>Criar Pedidos Balcão</h1>
            <select onChange={(e) => { setClienteId(e.target.value) }}>
                <option value="" id="">Selecione</option>
                {clientes.map((palmito) => {
                    return (
                        <option value={palmito.id} id={palmito.id}>
                            {palmito.nome}
                        </option>
                    )
                })}
            </select>

            <button onClick={abrirModal}>Abrir modal</button>
            <Modal isOpen={modalAberto}>
                <h1>Painel - Criar Pedidos</h1>
                <h2>Número: {pedNum.num}</h2> <br /> <br />

                <select onChange={(e) => setCategoriasId(e.target.value)}>
                    <option value="" id="">Selecione</option>
                    {categorias.map((frango) => {
                        return (
                            <option value={frango.id} id={frango.id}>
                                {frango.nome}
                            </option>
                        )
                    })}
                </select>

                <select onChange={(e) => setProdutosId(e.target.value)}>
                    <option value="" id="">Selecione</option>
                    {produtos.map((presunto) => {
                        return (
                            <option value={presunto.id} id={presunto.id}>
                                {presunto.nome}
                            </option>
                        )
                    })}
                </select>

                <input type="number" onChange={(e) => setQuant(e.target.value)} />

                <button onClick={() => adicionarProduto(pedNum.id, produtosId, quant)}>ADD Produto</button>

                <h1>Observação</h1>
                <input value={observation} onChange={(e) => { setObservation(e.target.value) }} /> <br /> <br />

                <button onClick={() => fecharModalApagar(pedNum.id)}>Cancelar Pedido</button>

                <button onClick={() => fecharModalAceitar(pedNum.id, observation)}>Aceitar Pedido</button>
            </Modal>
        </div>
    )
}