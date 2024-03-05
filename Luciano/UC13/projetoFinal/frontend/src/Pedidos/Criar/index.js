import { useState, useEffect } from "react"
import Modal from "react-modal"
import apiLocal from "../../API/apiLocal/api"
import { Link } from "react-router-dom"

export default function CriarPedidosBalcao() {

    const [clienteId, setClienteId] = useState("")
    const [modalAberto, setModalAberto] = useState(false)
    const [clientes, setClientes] = useState([""])

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

    function abrirModal() {
        setModalAberto(true)
    }

    function fecharModal() {
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
                <h1>Boa tarde</h1>

                <button onClick={fecharModal}>Fechar modal</button>
            </Modal>
        </div>
    )
}