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
        if (!nome, !fabricante, !preco) {
            toast.warning("Existem campos em Branco")
            return
        }

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
                <input type="text" placeholder="Nome" onChange={(e) => setnome(e.target.value)} value={nome} style={{ width: 300, height: 20 }} />  <br />
                <input type="text" placeholder="Fabricante" onChange={(e) => setfabricante(e.target.value)} value={fabricante} style={{ width: 300, height: 20 }} /> <br />
                <input type="text" placeholder="Preço" onChange={(e) => setpreco(e.target.value)} value={preco} style={{ width: 300, height: 20 }} />  <br />

                <button type="submit" style={{ fontSize: 20 }}>Cadastrar</button>
            </form>
        </div>
    )
}