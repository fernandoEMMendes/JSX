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
            <div className="align">
                <h1>Listar Usuarios</h1>
            </div>

            <div className="align">
                <a>Usuario Teste</a>
                <FiTrash2 color="red" /> {/*Esse icone é um recurso do JSX*/}
                <FiEdit3 color="green" /> <br /> {/*Esse icone é um recurso do JSX*/}
                <a>EmailTeste@Teste.com.br</a>
            </div>

            <br />

            <div className="align2">
                {
                    infoUsuarios.map((resultados) => {
                        return (
                            <a key={resultados.id}>
                                {resultados.nome}
                                <FiTrash2 color="red" onClick={() => { deleteUsuarios(resultados.id) }} />
                                <Link to={`/AlterarUsuario/${resultados.id}`}><FiEdit3 color="green" /></Link> <br />
                                {resultados.email}
                                <br />
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