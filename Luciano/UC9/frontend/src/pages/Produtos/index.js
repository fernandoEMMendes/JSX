import React, { useState, useEffect } from "react"
import apiLocal from "../../apiBack/apiLocal/api";
import "./Produtos.scss"

export default function Produtos() {

    const [nome, setNome] = useState("")
    const [fabricante, setFabricante] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [preco, setPreco] = useState("")

    const [categoria, setCategoria] = useState([""])

    useEffect(() => {
        async function verCategorias() {
            const response = await apiLocal.get("/ListarCategoria")
            setCategoria(response.data)
        }
        verCategorias()
    }, [categoria]);

    return (
        <div>
            <div className="titulo">
                <h1>Produtos</h1>
            </div>

            <div>
                <form className="forms">
                    <label>Nome</label>
                    <input type="text" value={nome} onChange={(e) => { setNome(e.target.value) }} />

                    <label>Fabricante</label>
                    <input type="text" value={fabricante} onChange={(e) => { setFabricante(e.target.value) }} />

                    <label>Quantidade</label>
                    <input type="text" value={quantidade} onChange={(e) => { setQuantidade(e.target.value) }} />

                    <label>Preço</label>
                    <input type="text" value={preco} onChange={(e) => { setPreco(e.target.value) }} />

                    <label>Banner</label>
                    <input type="file" value="" />

                    <label>Categoria</label>
                    <select>
                        {categoria.map((id) => {
                            return (
                                <option value={id.id}>
                                    {id.nome}
                                </option>
                            )
                        })}
                    </select>
                </form>
            </div>
        </div>
    )
}