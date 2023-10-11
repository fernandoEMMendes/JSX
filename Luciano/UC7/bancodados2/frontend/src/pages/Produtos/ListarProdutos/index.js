import { useEffect, useState } from "react"
import apiBack from "../../../services/apiBack"
import { FiTrash2, FiEdit3 } from "react-icons/fi"
import { toast } from "react-toastify"

import "./ListarProdutos.css"
import { Link } from "react-router-dom"



export default function ListarProdutos() {

    const [infoProdutos, setinfoProdutos] = useState([""])

    const [infoCategoria, setinfoCategoria] = useState([""])

    useEffect(() => {
        async function verInfo() {
            const response = await apiBack.get("/ListarProdutos/files")
            setinfoProdutos(response.data)
        }
        verInfo()
    }, [infoProdutos]);

    useEffect(() => {
        async function verCategoria() {
            const response = await apiBack.get("/ListarCategorias")
            setinfoCategoria(response.data)
        }
        verCategoria()
    }, [infoCategoria])

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
            <Link to="/Dashboard"><button href="/Dashboard" style={{ fontSize: 30 }}>Retornar ao Dashboard</button></Link>
            <div className="align">
                <h1>Listar Produtos</h1>
            </div>

            <br />

            <div className="align2">
                {infoProdutos.map((resultados) => {
                    return (

                        <a key={resultados.id}>
                            <div>
                                <div className="caixa">
                                    <a>IMG</a>
                                    <a>Nome</a>
                                    <a>Fabricante</a>
                                    <a>Preço (R$)</a>
                                    <a>Editar</a>
                                    <a>Apagar</a>
                                </div>

                                <div className="caixa">
                                    <img class="img" src={`http://localhost:3333/files/${resultados.banner}`} alt={`${resultados.banner}`} />
                                    {resultados.nome}
                                    {resultados.fabricante}
                                    {resultados.preco}
                                    <Link to={`/AlterarProdutos/${resultados.id}`}><FiEdit3 color="green" /></Link>
                                    <FiTrash2 color="red" onClick={() => { deleteProdutos(resultados.id) }} />
                                </div>
                            </div>


                            <div style={{ clear: "both" }}></div>
                        </a>

                    )
                })}

            </div>
        </div>
    )

}