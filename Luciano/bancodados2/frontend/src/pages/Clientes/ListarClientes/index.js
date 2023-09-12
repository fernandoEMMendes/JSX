import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack.js"
import { FiTrash2, FiEdit3, FiAirplay } from 'react-icons/fi';

import "./ListarClientes.css"
import { toast } from "react-toastify";


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

            <div className="align2">
                {infoClientes.map((resultados) => {
                    return (
                        <div>
                            <a key={resultados.id}>
                                {resultados.nome}
                                <FiTrash2 color="red" onClick={() => { deleteCliente(resultados.id) }} /> 
                                <FiEdit3 color="green" onClick={() => {}} /> <br />
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