import { useState, useEffect } from "react"
import Modal from "react-modal"
import apiLocal from "../../API/apiLocal/api"
import {useNavigate} from 'react-router-dom'

export default function CriarPedidosBalcao() {

    const navegar = useNavigate()
    const [clientes, setClientes] = useState([""])
    const [clienteId, setClienteId] = useState("")

    const [categorias, setCategorias] = useState([""])
    const [CategoriasId, setCategoriasId] = useState("")

    const [produtos, setProdutos] = useState([""])
    const [produtosId, setProdutosId] = useState("")

    const [quant, setQuant] = useState("")

    const [pedNum, setPedNum] = useState("")
    const [observation, setObservation] = useState("")

    const [listarPedidos, setListarPedidos] = useState([""])
    const [valorTotal, setValorTotal] = useState("")

    const [modalAberto, setModalAberto] = useState(false)

    const lsToken = localStorage.getItem("@tklogin2023")
    const token = JSON.parse(lsToken)

    useEffect(() => {
        async function verClientes() {
            const resposta = await apiLocal.get("/ListarClientes")
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

            const resposta = await apiLocal.get(`/ListarProdutosCategoria/${CategoriasId}`, {
            })
            setProdutos(resposta.data.filter((item) => item.categoriaId === CategoriasId))
        }
        verProdutosCategoria()
        return
    }, [CategoriasId])

    useEffect(() => {
        async function somarItensPedido() {
            const id = pedNum.id
            const resposta = await apiLocal.get(`/SomarItensPedido/${id}`)
            setValorTotal(resposta.data)
        }
        somarItensPedido()
    }, [listarPedidos])

    async function adicionarProduto(id, prod, quant) {

        try {
            const prodExt = produtos.filter((item) => item.id === produtosId)
            const valor = Number(prodExt.map((item) => item.preco) * quant)

            if (quant === null || quant <= 0) {
                alert("quantidade invalida")
                return
            }

            const resposta = await apiLocal.post("/CriarPedidosItem", {
                produtoId: prod,
                quant: quant,
                pedidoId: id,
                val_total: valor
            })

            let dados = {
                id: resposta.data.id,
                produto: resposta.data.produto.nome,
                quantidade: resposta.data.quant,
                valor: resposta.data.val_total
            }

            setListarPedidos(oldArray => [...oldArray, dados])
        } catch (err) {
            console.log(err)
        }
    }

    async function retirarProduto(id) {

        await apiLocal.delete("/DeletarPedidosItem", {
            data: {
                pedidositemId: id
            }
        })
        setListarPedidos(listarPedidos.filter((item) => item.id !== id))
    }

    async function abrirModal() {

        setListarPedidos([""])

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
            novoRascunho: rascunho,
            novoValor: valorTotal
        })

        setObservation("")
        setModalAberto(false)
    }

    function Navega(){
        navegar('/Dashboard')
    }

    return (
        <div>
            <h1>Criar Pedidos Balcão</h1>
            <select value={clienteId} onChange={(e) => { setClienteId(e.target.value) }}>
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

                <select value={CategoriasId} onChange={(e) => setCategoriasId(e.target.value)}>
                    <option value="" id="">Selecione</option>
                    {categorias.map((frango) => {
                        return (
                            <option value={frango.id}>
                                {frango.nome}
                            </option>
                        )
                    })}
                </select>

                <select value={produtosId} onChange={(e) => setProdutosId(e.target.value)}>
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

                {listarPedidos.length === 0 ? (
                    <h2>Aguardando produtos...</h2>
                ) : (
                    <>
                        {
                            listarPedidos.map((palmito) => {
                                return (
                                    <>
                                        {palmito.length !== 0 && (
                                            <h3>
                                                {palmito.produto} - {palmito.quantidade} - {palmito.valor}
                                                <button onClick={() => retirarProduto(palmito.id)}>Apagar</button>
                                            </h3>
                                        )}
                                    </>
                                )
                            })
                        }
                    </>

                )}

                <h1>Observação</h1>
                <input value={observation} onChange={(e) => { setObservation(e.target.value) }} /> <br /> <br />

                <h3>Valor total do pedido</h3>
                <h3>{valorTotal}</h3>

                <button onClick={() => fecharModalApagar(pedNum.id)}>Cancelar Pedido</button>

                <button onClick={() => fecharModalAceitar(pedNum.id, observation)}>Aceitar Pedido</button>
            </Modal>
            <button onClick={Navega}>Voltar</button>
        </div>
    )
}