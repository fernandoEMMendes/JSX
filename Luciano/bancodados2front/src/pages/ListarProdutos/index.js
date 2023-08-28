import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack";
import { FiTrash2 } from "react-icons"



export default function ListarProdutos() {

    const [infoProdutos, setinfoProdutos] = useState([""])

    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarProdutos")
            setinfoProdutos(response.data)
        }
        verInfo()
    }, [infoProdutos]);

    async function deleteProdutos(id) {
        await apiBack.delete(`/ApagarProdutos/${id}`)
    }



    return (
        <div>
            <h1>Listar Produtos</h1>

            {infoProdutos.map((infos) => {
                return (
                    <a key={infos.id}>
                        {infos.nome} <br />
                        {infos.fabricante} <br /> <br />


                        <FiTrash2 color="red" onClick={() => deleteProdutos(infos.id)}/>
                    </a>
                )
            })}
        </div>
    )

}