import { useState } from "react"
import apiBack from "../../../services/apiBack"
import "./CadastroClientes.css"
import { toast } from "react-toastify"


export default function CadastroClientes() {

    const [nome, setnome] = useState("")
    const [cpf_cnpj, setcpf_cnpj] = useState("")
    const [rg_ie, setrg_ie] = useState("")
    const [telefone, settelefone] = useState("")
    const [rua, setrua] = useState("")
    const [casa, setcasa] = useState("")
    const [complemento, setcomplemento] = useState("")
    const [bairro, setbairro] = useState("")
    const [cidade, setcidade] = useState("")
    const [estado, setestado] = useState("")

    async function alerta(e) {
        e.preventDefault(e)
        if (!nome, !cpf_cnpj, !rg_ie, !telefone, !rua, !casa, !bairro, !cidade, !estado) {
            toast.warning("Existem campos em Branco")
            return
        }

        const response = await apiBack.post("/CriarClientes", {
            nome,
            cpf_cnpj,
            rg_ie,
            telefone,
            rua,
            casa,
            complemento,
            bairro,
            cidade,
            estado
        })
        toast.success(response.data.dados)
    }

    return (
        <div className="align">
            <h1>Cadastro Clientes</h1>

            <form onSubmit={alerta}>
                <label>Cadastre-se</label> <br /> <br />
                <input type="text" onChange={(e) => setnome(e.target.value)} value={nome} placeholder="Nome" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setcpf_cnpj(e.target.value)} value={cpf_cnpj} placeholder="CPF / CNPJ" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setrg_ie(e.target.value)} value={rg_ie} placeholder="RG / IE" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => settelefone(e.target.value)} value={telefone} placeholder="Telefone" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setrua(e.target.value)} value={rua} placeholder="Rua" style={{ width: 300, height: 20 }} /> <br />
                <input type="number" onChange={(e) => setcasa(e.target.value)} value={casa} placeholder="Numero" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setcomplemento(e.target.value)} value={complemento} placeholder="Complemento" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setbairro(e.target.value)} value={bairro} placeholder="Bairro" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setcidade(e.target.value)} value={cidade} placeholder="Cidade" style={{ width: 300, height: 20 }} /> <br />
                <input type="text" onChange={(e) => setestado(e.target.value)} value={estado} placeholder="Estado" style={{ width: 300, height: 20 }} /> <br />

                <button type="submit" style={{ fontSize: 20 }}>Cadastrar</button>
            </form>
        </div>
    )
}