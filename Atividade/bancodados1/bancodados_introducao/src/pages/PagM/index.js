import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack"
import { FiTrash2, FiEdit } from "react-icons/fi";


import "./PagM.css"

export default function PagM() {

    const [Info, setInfo] = useState([''])

    //função para recuperar os dados e renderiza
    useEffect(() => {
        async function verDados() {
            const response = await apiBack.get("/VerDados")
            setInfo(response.data)
        }
        verDados()
    }, [Info])


    //função para deletar dados
    async function handleDelete(id) {
        await apiBack.delete(`/deleteUser/${id}`)
    }



















    return (
        <div className="aligntitle">
            <h1>----------------Lista de cadastros--------------------</h1>
            {Info.map((infos) => {
                return (
                    <article key={infos.id_cliente} className="aligntext">
                        <strong>{infos.cod_cliente}</strong>
                        <strong>{infos.nome}</strong>
                        <strong>{infos.cidade}</strong>
                        <FiEdit />
                        <FiTrash2 color="red" onClick={() => handleDelete(infos.id_cliente)} />
                    </article>
                )
            }
            )}
        </div>
    )
}