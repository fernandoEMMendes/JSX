import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react"

import apiBack from "../../../services/apiBack";
import { toast } from "react-toastify";
import "./AlterarProdutos.css"



export default function AlterarProduto() {
    const { id } = useParams()
    const navigation = useNavigate()
    const [ListarProdutos, setListarProdutos] = useState("")

    const [NovoNome, setNovoNome] = useState("")
    const [NovoFabricante, setNovoFabricante] = useState("")
    const [NovoPreco, setNovoPreco] = useState("")

    useEffect(() => {
        async function ListarProdutoUnico() {
            const response = await apiBack.get(`/ListarUnicoProduto/${id}`)
            setListarProdutos(response.data)
        }
        ListarProdutoUnico()
    }, [id]);

    useEffect(() => {
        setNovoNome(ListarProdutos.nome)
        setNovoFabricante(ListarProdutos.fabricante)
        setNovoPreco(ListarProdutos.preco)
    }, [ListarProdutos])

    async function AlterarProdutos(e) {
        e.preventDefault(e)
        if (!NovoNome, !NovoFabricante, !NovoPreco) {
            toast.warning("Existem campos em Branco")
            return
        }

        const response = await apiBack.put("/AlterarProdutos", {
            id,
            NovoNome,
            NovoFabricante,
            NovoPreco
        })
        toast.info(response.data.dados)
        navigation("/ListarProdutos")
    }

    return (
        <div className="align">
            <h1>Editar Produto</h1>

            <form onSubmit={AlterarProdutos}>
                <label>Nome: </label>
                <input type="text" value={NovoNome} onChange={(e) => { setNovoNome(e.target.value) }} style={{ width: 300, height: 20 }} />

                <br />

                <label>Fabricante: </label>
                <input type="text" value={NovoFabricante} onChange={(e) => { setNovoFabricante(e.target.value) }} style={{ width: 300, height: 20 }} />

                <br />

                <label>Preço: </label>
                <input type="text" value={NovoPreco} onChange={(e) => { setNovoPreco(e.target.value) }} style={{ width: 300, height: 20 }} />

                <br /> <br />

                <button type="submit">submit</button> <br />
            </form>
        </div>
    )
}
