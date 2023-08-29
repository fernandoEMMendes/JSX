import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack.js"
import { FiTrash2 } from 'react-icons/fi';

import "./ListarClientes.css"


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
        await apiBack.delete("/ApagarCliente", {
            data: {
                remove: id
            }
        })
    }


    return (
        <div>
            <div className="align">
                <h1>Listar Clientes</h1>
            </div>

            <div className="align2">
                {infoClientes.map((infos) => {
                    return (
                        <div>
                            <a key={infos.id}>
                                {infos.nome}
                                <FiTrash2 color="red" onClick={() => { deleteCliente(infos.id) }} /> <br />
                                {infos.bairro} <br />
                                {infos.cidade}

                                <br /> <br />
                            </a>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}