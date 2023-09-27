import { useEffect, useState } from "react"
import apiBack from "../../../services/apiBack"
import { FiTrash2, FiEdit3 } from "react-icons/fi";

import "./ListarUsuario.css"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


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
        const response = await apiBack.delete("/DeletarUsuarios", {
            data: {
                remove: id
            }
        })
        toast.success(response.data.dados)
    }


    return (
        <div>
            <Link to="/Dashboard"><button href="/Dashboard" style={{ fontSize: 30 }}>Retornar ao Dashboard</button></Link>
            <div className="align">
                <h1>Listar Usuarios</h1>
            </div>

            <br />

            <div className="align2">
                {
                    infoUsuarios.map((resultados) => {
                        return (
                            <a key={resultados.id}>
                                <table class="table">
                                    <tr>
                                        <td class="table">Nome</td>
                                        <td class="table">Email</td>
                                        <td class="table">Editar</td>
                                        <td class="table">Apagar</td>
                                    </tr>
                                    <tr>
                                        <td class="table">{resultados.nome}</td>
                                        <td class="table">{resultados.email}</td>
                                        <td class="table"><FiTrash2 color="red" onClick={() => { deleteUsuarios(resultados.id) }} /></td>
                                        <td class="table"><Link to={`/AlterarUsuario/${resultados.id}`}><FiEdit3 color="green" /></Link></td>
                                    </tr>
                                </table>
                            </a>
                        )
                    })
                }
            </div >
        </div>
    )
}