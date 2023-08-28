import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack.js"
import { FiTrash2 } from 'react-icons/fi';



export default function ListarClientes() {

    const [infoClientes, setinfoClientes] = useState([""])
    const [ID, setID] = useState([""])


    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarClientes")
            setinfoClientes(response.data)
        }
        verInfo()
    }, [infoClientes]);




    return (
        <div>
            <h1>Listar Clientes</h1>

            {infoClientes.map((infos) => {
                return (
                    <div>
                        <a key={infos.id}>
                            {infos.nome}

                            <br /> <br />
                        </a>

                        <FiTrash2 color="red"/>
                    </div>
                )
            })}
        </div>
    )

}