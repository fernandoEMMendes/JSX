import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack"


export default function PagM() {

    const [Info, setInfo] = useState([''])

    useEffect(() => {
        async function verDados() {
            const response = await apiBack.get("/VerDados")
            setInfo(response.data)
        }
        verDados()
    }, [Info])


    return (
        <div>
            <h1>manipula</h1>
            {Info.map((infos) => {
                return (
                    <article key={infos.id_cliente}>
                        <strong>nome        = {infos.nome}</strong> <br />
                        <strong>tel_cel     = {infos.tel_celular}</strong><br />
                        <strong>rua         = {infos.rua}</strong><br />
                        <strong>complemento = {infos.complemento}</strong><br />
                        <strong>cep         = {infos.cep}</strong><br />
                        <strong>bairro      = {infos.bairro}</strong><br />
                        <strong>cidade      = {infos.cidade}</strong><br />
                        <strong>estado      = {infos.estado}</strong><br /> <br />
                    </article>
                )
            })}
        </div>
    )
}