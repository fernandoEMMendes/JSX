import { useEffect, useState } from "react"
import apiBack from "../../../services/apiBack"
import { FiTrash2, FiEdit3 } from 'react-icons/fi';

import "./ListarClientes.css"
import { toast } from "react-toastify";
import { Link } from "react-router-dom";


export default function ListarClientes() {

    const [infoClientes, setinfoClientes] = useState([""])


    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarClientes")
            setinfoClientes(response.data)
        }
        verInfo()
    }, [infoClientes]);

    async function deleteCliente(id) {
        const response = await apiBack.delete("/DeletarClientes", {
            data: {
                remove: id
            }
        })
        toast.success(response.data.dados)
    }


    return (
        <div>
            <div className="align">
                <h1>Listar Clientes</h1>
            </div>

            <div className="align">
                <a>Cliente Teste</a>
                <FiTrash2 color="red" /> {/*Esse icone é um recurso do JSX*/}
                <FiEdit3 color="green" /> <br /> {/*Esse icone é um recurso do JSX*/}
                <a>Mary Dota</a>< br />
                <a>Bauru</a>
            </div>

            <br />

            <div className="align2">
                {infoClientes.map((resultados) => {
                    return (
                        <div>
                            <a key={resultados.id}>
                                {resultados.nome}
                                <FiTrash2 color="red" onClick={() => { deleteCliente(resultados.id) }} />
                                <Link to={`/AlterarCliente/${resultados.id}`}><FiEdit3 color="green" /> </Link><br />
                                {resultados.bairro} <br />
                                {resultados.cidade} <br />
                                -----------------------------------
                                <br /> <br />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}