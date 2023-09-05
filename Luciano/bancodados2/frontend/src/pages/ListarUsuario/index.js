import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack";
import { FiTrash2 } from "react-icons/fi";

import "./ListarUsuario.css"


export default function ListarUsuarios() {

    const [infoUsuarios, setinfoUsuarios] = useState([""])


    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarUsuarios")
            setinfoUsuarios(response.data)
        }
        verInfo()
    }, [infoUsuarios]);

    async function deleteUsuarios(id) {
        await apiBack.delete("/ApagarUsuarios", {
            data: {
                remove: id
            }
        })
    }



    return (
        <div>
            <div className="align">
                <h1>Listar Usuarios</h1>
            </div>

            <div className="align2">
                {
                    infoUsuarios.map((infos) => {
                        return (
                            <a key={infos.id}>
                                {infos.nome}
                                <FiTrash2 color="red" onClick={() => { deleteUsuarios(infos.id) }} /> <br />
                                {infos.email} <br />
                                -----------------------------------
                                <br /> <br />
                            </a>
                        )
                    })
                }
            </div >
        </div>
    )
}