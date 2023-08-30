import { useEffect, useState } from "react"
import api from "../../Api/api"


export default function ListarUsuarios() {

    const [usuarios, setusuarios] = useState([''])

    useEffect(() => {
        async function listarUsuarios() {
            const response = await api.get('/ListarUsuarios')
            setusuarios(response.data)
        }
        listarUsuarios()
    }, [usuarios])



    return (
        <div>
            <h1>Listar Usuarios</h1>
            {usuarios.map((usuario) => {
                return(
                    <a key={usuario.id}>
                        {usuario.id} <br />
                        {usuario.nome} <br /> <br />
                    </a>
                )
            })}
        </div>
    )
}

