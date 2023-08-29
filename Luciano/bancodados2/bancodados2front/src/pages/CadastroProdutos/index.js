import { useState } from "react"
import apiBack from "../../services/apiBack"
import "./CadastroProdutos.css"


export default function CadastroProdutos() {

    const [nome, setnome] = useState("")
    const [fabricante, setfabricante] = useState("")
    const [quantidade, setquantidade] = useState("")
    const [preco, setpreco] = useState("")



    function alert(e) {
        e.preventDefault()

        apiBack.post("/CriarProdutos", {
            nome,
            fabricante,
            quantidade,
            preco
        })

        alert("Enviado")
    }

    return (
        <div className="align">
            <h1>CadastroProdutos</h1>

            <form onSubmit={alert}>
                <label>Cadatrar Produto</label> <br /> <br />
                <input type="text" placeholder="Nome" onChange={(e) => setnome(e.target.value)} value={nome} />  <br />
                <input type="text" placeholder="Fabricante" onChange={(e) => setfabricante(e.target.value)} value={fabricante} />  <br />
                <input type="text" placeholder="Quantidade" onChange={(e) => setquantidade(e.target.value)} value={quantidade} />  <br />
                <input type="text" placeholder="Preço" onChange={(e) => setpreco(e.target.value)} value={preco} />  <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}