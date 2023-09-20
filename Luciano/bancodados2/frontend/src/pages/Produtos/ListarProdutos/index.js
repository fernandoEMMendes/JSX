import { useEffect, useState } from "react"
import apiBack from "../../../services/apiBack"
import { FiTrash2, FiEdit3 } from "react-icons/fi"
import { toast } from "react-toastify"

import "./ListarProdutos.css"
import { Link } from "react-router-dom"



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


    return (

        <div>
            <div className="align">
                <h1>Listar Produtos</h1>
            </div>

            <div className="align">
                <a>Refrigerante 250ml</a>
                <FiTrash2 color="red" /> {/*Esse icone é um recurso do JSX*/}
                <FiEdit3 color="green" /> <br /> {/*Esse icone é um recurso do JSX*/}
                <a>Fabricante: Coca-Cola</a><br />
                <a>R$4,99</a>
            </div>

            <br />

            <div className="align2">
                {infoProdutos.map((resultados) => {
                    return (
                        <a key={resultados.id}>
                            {resultados.nome}
                            <FiTrash2 color="red" onClick={() => { deleteProdutos(resultados.id) }} />
                            <Link to={`/AlterarProdutos/${resultados.id}`}><FiEdit3 color="green" /></Link> <br />
                            {resultados.fabricante} <br />
                            R${resultados.preco} <br />
                            -----------------------------------
                            <br /> <br />
                        </a>
                    )
                })}
            </div>
        </div>
    )

}