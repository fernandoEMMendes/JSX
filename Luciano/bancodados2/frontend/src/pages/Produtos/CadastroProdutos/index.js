import { useState } from "react"
import { toast } from "react-toastify"
import apiBack from "../../../services/apiBack"
import "./CadastroProdutos.css"


export default function CadastroProdutos() {

    const [nome, setnome] = useState("")
    const [fabricante, setfabricante] = useState("")
    const [preco, setpreco] = useState("")



    async function alerta(e) {
        e.preventDefault(e)

        const response = await apiBack.post("/CriarProdutos", {
            nome,
            fabricante,
            preco
        })
        toast.success(response.data.dados)
    }

    return (
        <div className="align">
            <h1>Cadastro Produtos</h1>

            <form onSubmit={alerta}>
                <label>Cadatrar Produto</label> <br /> <br />
                <input type="text" placeholder="Nome" onChange={(e) => setnome(e.target.value)} value={nome} />  <br />
                <input type="text" placeholder="Fabricante" onChange={(e) => setfabricante(e.target.value)} value={fabricante} /> <br />
                <input type="text" placeholder="Preço" onChange={(e) => setpreco(e.target.value)} value={preco} />  <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}