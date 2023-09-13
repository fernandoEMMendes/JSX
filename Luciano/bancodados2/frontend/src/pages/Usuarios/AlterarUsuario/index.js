import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import apiBack from "../../../services/apiBack"

export default function AlterarUsuario() {
    const { id } = useParams()
    const [ListarUsuario, setListarUsuario] = useState("")

    useEffect(() => {
        async function ListarUsuarioUnico() {
            const response = await apiBack.get(`/ListarUnicoUsuario/${id}`)
            setListarUsuario(response.data)
        }
        ListarUsuarioUnico()
    }, [])

    return (
        <div>
            <h1>Editar</h1>
            <h3>{ListarUsuario.nome}</h3>
            <h3>{ListarUsuario.email}</h3>
        </div>
    )
}