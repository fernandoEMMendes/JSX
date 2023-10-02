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
                            <table class="table">
                                <tr>
                                    <td class="table"><a>IMG</a></td>
                                    <td class="table"><a>Nome</a></td>
                                    <td class="table"><a>Fabricante</a></td>
                                    <td class="table"><a>Preço (R$)</a></td>
                                    <td class="table"><a>Editar</a></td>
                                    <td class="table"><a>Apagar</a></td>
                                </tr>
                                <tr>
                                    <td class="table"><img class="img" src={`http://localhost:3333/files/${resultados.banner}`} alt={`${resultados.banner}`} /></td>
                                    <td class="table">{resultados.nome}</td>
                                    <td class="table">{resultados.fabricante}</td>
                                    <td class="table">{resultados.preco}</td>
                                    <td class="table"><Link to={`/AlterarProdutos/${resultados.id}`}><FiEdit3 color="green" /></Link></td>
                                    <td class="table"><FiTrash2 color="red" onClick={() => { deleteProdutos(resultados.id) }} /></td>
                                </tr>
                            </table>
                            
                            <div style={{ clear: "both" }}></div>
                        </a>
                        
                    )
                })}

            </div>
        </div>
    )

}