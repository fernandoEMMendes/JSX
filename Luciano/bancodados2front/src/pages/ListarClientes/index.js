import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack.js"



export default function ListarClientes() {

    const [infoClientes, setinfoClientes] = useState([""])


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
                    <a key={infos.id}>
                        {infos.nome}

                        <br /> <br />
                    </a>
                )
            })}
        </div>
    )

}