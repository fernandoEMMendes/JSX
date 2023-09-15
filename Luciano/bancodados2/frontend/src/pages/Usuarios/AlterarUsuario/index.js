import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import apiBack from "../../../services/apiBack"
import "./AlterarUsuario.css"

export default function AlterarUsuario() {
    const { id } = useParams()
    const [ListarUsuario, setListarUsuario] = useState("")

    const [nome, setnome] = useState("")
    const [email, setemail] = useState("")

    useEffect(() => {
        async function ListarUsuarioUnico() {
            const response = await apiBack.get(`/ListarUnicoUsuario/${id}`)
            setListarUsuario(response.data)
        }
        ListarUsuarioUnico()
    }, [id])

    useEffect(() => {
        setnome(ListarUsuario.nome)
        setemail(ListarUsuario.email)
    }, [ListarUsuario])

    return (
        <div className="align">
            <h1>Editar</h1>
            <form>

                <label>Nome: </label>
                <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} />

                <br />

                <label>Email: </label>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} />

                <br />

                <button type="submit">submit</button>
            </form>
        </div>
    )
}