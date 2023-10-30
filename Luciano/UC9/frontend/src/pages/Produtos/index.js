import React, { useState, useEffect } from "react"
import apiLocal from "../../api/apiLocal/api";
import { toast } from "react-toastify"
import "./Produtos.scss"

export default function Produtos() {

    const [nome, setNome] = useState("")
    const [fabricante, setFabricante] = useState("")
    const [quantidade, setQuantidade] = useState("")
    const [preco, setPreco] = useState("")
    const [idCategoria, setIdcategoria] = useState("")
    const [banner, setBanner] = useState(null)

    const [listarCategoria, setListarCategoria] = useState([""])

    const authToken = localStorage.getItem("@tklogin2023")
    const token = JSON.parse(authToken)

    useEffect(() => {
        async function verCategorias() {
            const response = await apiLocal.get("/ListarCategoria", {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            setListarCategoria(response.data)
        }
        verCategorias()
    }, [listarCategoria]);

    function handleImg(e) {
        if (!e.target.files) {
            alert("imagem faltando")
            return
        }
        const imagem = e.target.files[0]
        if (imagem.type === "image/png") {
            setBanner(imagem)
        }
    }

    async function Criar(e) {
        try {
            e.preventDefault(e)
            const categoryId = idCategoria
            const data = new FormData()

            data.append("nome", nome)
            data.append("fabricante", fabricante)
            data.append("quantidade", quantidade)
            data.append("file", banner)
            data.append("preco", preco)
            data.append("categoryId", categoryId)

            const response = await apiLocal.post("/CriarProduto", data)
            toast.success(response.data.dados)
        } catch (err) {
            if (err = 401) { toast.error("Campos em branco ou inválidos") }
        }
    }

    return (
        <div>
            <div className="titulo">
                <h1>Produtos</h1>
            </div>

            <div>
                <form className="forms" onSubmit={Criar}>
                    <label>Nome</label>
                    <input
                        type="text"
                        value={nome}
                        onChange={(e) => { setNome(e.target.value) }}
                    />

                    <label>Fabricante</label>
                    <input
                        type="text"
                        value={fabricante}
                        onChange={(e) => { setFabricante(e.target.value) }}
                    />

                    <label>Quantidade</label>
                    <input
                        type="text"
                        value={quantidade}
                        onChange={(e) => { setQuantidade(e.target.value) }}
                    />

                    <label>Preço</label>
                    <input
                        type="text"
                        value={preco}
                        onChange={(e) => { setPreco(e.target.value) }}
                    />

                    <label>Banner</label>
                    <a>(Somente PNGs)</a>
                    <input
                        type="file"
                        accept="image/png"
                        onChange={handleImg}
                    />

                    <label>Categoria</label>
                    <select onChange={(e) => { setIdcategoria(e.target.value) }}>
                        <option value="" id="">{">Selecione um<"}</option>
                        {listarCategoria.map((tm) => {
                            return (
                                <option value={tm.id} id={tm.id}>
                                    {`>${tm.nome}<`}
                                </option>
                            )
                        })}
                    </select>

                    <br />

                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>
    )
}