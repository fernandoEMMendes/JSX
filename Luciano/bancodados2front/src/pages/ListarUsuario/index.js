import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack";





export default function ListarUsuarios() {

    const [infoUsuarios, setinfoUsuarios] = useState([""])


    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarUsuarios")
            setinfoUsuarios(response.data)
        }
        verInfo()
    }, [infoUsuarios]);



    return (
        <div>
            <h1>Listar Usuarios</h1>

            {infoUsuarios.map((infos) => {
                return (
                    <a key={infos.id}>
                        {infos.nome} <br /> <br />
                    </a>
                )
            })}
        </div>
    )
}