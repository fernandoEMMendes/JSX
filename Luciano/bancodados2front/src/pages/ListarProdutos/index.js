import {useEffect, useState} from "react"
import apiBack from "../../services/apiBack";




export default function ListarProdutos() {

    const [infoProdutos, setinfoProdutos] = useState([""])

    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarProdutos")
            setinfoProdutos(response.data)
        }
        verInfo()
    }, [infoProdutos]);



    return (
        <div>
            <h1>Listar Produtos</h1>

            {infoProdutos.map((infos) => {
                return (
                    <a key={infos.id}>
                        {infos.nome}
                    </a>
                )
            })}
        </div>
    )

}