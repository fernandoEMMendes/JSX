import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"
import { toast } from "react-toastify";
import "./AlterarCliente.css"
import apiBack from "../../../services/apiBack";

export default function AlterarCliente() {
    const { id } = useParams()
    const navigation = useNavigate()
    const [ListarCliente, setListarCliente] = useState("")

    const [NovoNome, setNovoNome] = useState("")
    const [NovoTelefone, setNovoTelefone] = useState("")
    const [NovoRua, setNovoRua] = useState("")
    const [NovoCasa, setNovoCasa] = useState("")
    const [NovoComplemento, setNovoComplemento] = useState("")
    const [NovoBairro, setNovoBairro] = useState("")
    const [NovoCidade, setNovoCidade] = useState("")
    const [NovoEstado, setNovoEstado] = useState("")

    useEffect(() => {
        async function ListarClienteUnico() {
            const response = await apiBack.get(`/ListarUnicoCliente/${id}`)
            setListarCliente(response.data)
        }
        ListarClienteUnico()
    }, [id])

    useEffect(() => {
        setNovoNome(ListarCliente.nome)
        setNovoTelefone(ListarCliente.telefone)
        setNovoRua(ListarCliente.rua)
        setNovoCasa(ListarCliente.casa)
        setNovoComplemento(ListarCliente.complemento)
        setNovoBairro(ListarCliente.bairro)
        setNovoCidade(ListarCliente.cidade)
        setNovoEstado(ListarCliente.estado)
    }, [ListarCliente])

    async function AlterarCliente(e) {
        e.preventDefault()
        const response = await apiBack.put("/AlterarCliente", {
            id,
            NovoNome,
            NovoTelefone,
            NovoRua,
            NovoCasa,
            NovoComplemento,
            NovoBairro,
            NovoCidade,
            NovoEstado
        })
        toast.info(response.data.dados)
        navigation("/ListarClientes")
    }

    return (
        <div className="align">
            <h1>Editar Cliente</h1>
            <form onSubmit={AlterarCliente}>
                <label>Nome: </label>
                <input type="text" value={NovoNome} onChange={(e) => setNovoNome(e.target.value)} />

                <br />

                <label>Telefone: </label>
                <input type="text" value={NovoTelefone} onChange={(e) => setNovoTelefone(e.target.value)} />

                <br />

                <label>Rua: </label>
                <input type="text" value={NovoRua} onChange={(e) => setNovoRua(e.target.value)} />

                <br />
                <label>Casa: </label>
                <input type="text" value={NovoCasa} onChange={(e) => setNovoCasa(e.target.value)} />

                <br />
                <label>Complemento: </label>
                <input type="text" value={NovoComplemento} onChange={(e) => setNovoComplemento(e.target.value)} />

                <br />
                <label>Bairro: </label>
                <input type="text" value={NovoBairro} onChange={(e) => setNovoBairro(e.target.value)} />

                <br />
                <label>Cidade: </label>
                <input type="text" value={NovoCidade} onChange={(e) => setNovoCidade(e.target.value)} />

                <br />
                <label>Estado: </label>
                <input type="text" value={NovoEstado} onChange={(e) => setNovoEstado(e.target.value)} />

                <br /> <br />

                <button type="submit">submit</button><br />
            </form>
        </div>
    )
}