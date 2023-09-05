import { useEffect, useState } from "react"
import apiBack from "../../services/apiBack";
import { FiTrash2 } from "react-icons/fi"

import "./ListarProdutos.css"



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
        await apiBack.delete(`/DeletarProdutos/`, {
            data: {
                remove: id
            }
        })
    }



    return (

        <div>
            <div className="align">
                <h1>Listar Produtos</h1>
            </div>

            <div className="align2">
                {infoProdutos.map((infos) => {
                    return (
                        <a key={infos.id}>

                            {infos.nome}
                            <FiTrash2 color="red" onClick={() => { deleteProdutos(infos.id) }} /><br />
                            {infos.fabricante} <br />
                            -----------------------------------
                            <br /> <br />
                        </a>
                    )
                })}
            </div>
        </div>
    )

}