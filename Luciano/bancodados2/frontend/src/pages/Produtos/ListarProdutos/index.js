import { useEffect, useState } from "react"
import apiBack from "../../../services/apiBack"
import { FiTrash2, FiEdit3 } from "react-icons/fi"
import { toast } from "react-toastify"

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
        const response = await apiBack.delete(`/DeletarProdutos/`, {
            data: {
                remove: id
            }
        })
        toast.success(response.data.dados)
    }

    async function editProdutos(id) {
        toast.success(id)
    }


    return (

        <div>
            <div className="align">
                <h1>Listar Produtos</h1>
            </div>

            <div className="align2">
                {infoProdutos.map((resultados) => {
                    return (
                        <a key={resultados.id}>
                            {resultados.nome}
                            <FiTrash2 color="red" onClick={() => { deleteProdutos(resultados.id) }} />
                            <FiEdit3 color="green" onClick={() => { editProdutos(resultados.id) }} /> <br />
                            {resultados.fabricante} <br />
                            -----------------------------------
                            <br /> <br />
                        </a>
                    )
                })}
            </div>
        </div>
    )

}