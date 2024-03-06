import { useState, useEffect } from "react"
import Modal from "react-modal"
import apiLocal from "../../API/apiLocal/api"

export default function CriarPedidosBalcao() {

    const [clientes, setClientes] = useState([""])
    const [clienteId, setClienteId] = useState("")

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

        await apiLocal.delete("/DeletarPedidos", {
            data: {
                pedidoId: id
            }
        })
        setModalAberto(false)
    }

    async function fecharModalAceitar(id, obs) {

        await apiLocal.put("/ConfirmarPedidos", {
            pedidoId: id,
            novoObservacao: obs,
            novoDraft: false
        })
        setModalAberto(false)
    }

    return (
        <div>
            <h1>Criar Pedidos Balcão</h1>
            <select onChange={(e) => setClienteId(e.target.value)}>
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

                <h1>Observação</h1>
                <input value={observation} onChange={(e) => { setObservation(e.target.value) }} /> <br /> <br />

                <button onClick={() => fecharModalApagar(pedNum.id)}>Cancelar Pedido</button>

                <button onClick={() => fecharModalAceitar(pedNum.id, observation)}>Aceitar Pedido</button>
            </Modal>
        </div>
    )
}