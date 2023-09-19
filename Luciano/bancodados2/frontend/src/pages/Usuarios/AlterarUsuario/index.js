import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { toast } from "react-toastify"
import apiBack from "../../../services/apiBack"
import "./AlterarUsuario.css"

export default function AlterarUsuario() {
    const { id } = useParams()
    const navigation = useNavigate()
    const [ListarUsuario, setListarUsuario] = useState("")
    
    const [NovoNome, setNovoNome] = useState("")
    const [NovoEmail, setNovoEmail] = useState("")

    useEffect(() => {
        async function ListarUsuarioUnico() {
            const response = await apiBack.get(`/ListarUnicoUsuario/${id}`)
            setListarUsuario(response.data)
        }
        ListarUsuarioUnico()
    }, [id])

    useEffect(() => {
        setNovoNome(ListarUsuario.nome)
        setNovoEmail(ListarUsuario.email)
    }, [ListarUsuario])

    async function AlterarUsuario(e) {
        e.preventDefault()
        const response = await apiBack.put("/AlterarUsuario", {
            id,
            NovoNome,
            NovoEmail
        })
        toast.info(response.data.dados)
        navigation("/ListarUsuarios")
    }

    return (
        <div className="align">
            <h1>Editar Usuario</h1>
            <form onSubmit={AlterarUsuario}>

                <label>Nome: </label>
                <input type="text" value={NovoNome} onChange={(e) => setNovoNome(e.target.value)} />

                <br />

                <label>Email: </label>
                <input type="text" value={NovoEmail} onChange={(e) => setNovoEmail(e.target.value)} />

                <br /> <br />

                <button type="submit">submit</button> <br />
                <button onClick={() => navigation('/')}>Voltar</button>
            </form>     
        </div>
    )
}