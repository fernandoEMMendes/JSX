import { useState } from "react"
import "./CadastroClientes.css"



export default function CadastroClientes() {

    const [nome, setnome] = useState("")
    const [cpf_cnpj, setcpf_cnpj] = useState("")
    const [rg_ie, setrg_ie] = useState("")
    const [tel_cel, settel_cel] = useState("")
    const [tel_fixo, settel_fixo] = useState("")
    const [rua, setrua] = useState("")
    const [numero, setnumero] = useState("")
    const [complemento, setcomplemento] = useState("")
    const [bairro, setbairro] = useState("")
    const [cidade, setcidade] = useState("")
    const [estado, setestado] = useState("")

    function alert(e) {
        e.preventDefault()
    }

    return (
        <div className="align">
            <h1>CadastroClientes</h1>

            <form onSubmit={alert}>
                <label>Cadastre-se</label> <br /> <br />
                <input required type="text" onChange={(e) => setnome(e.target.value)} value={nome} placeholder="Nome" /> <br />
                <input required type="text" onChange={(e) => setcpf_cnpj(e.target.value)} value={cpf_cnpj} placeholder="CPF / CNPJ" /> <br />
                <input required type="text" onChange={(e) => setrg_ie(e.target.value)} value={rg_ie} placeholder="RG / IE" /> <br />
                <input required type="text" onChange={(e) => settel_cel(e.target.value)} value={tel_cel} placeholder="Telefone Celular" /> <br />
                <input required type="text" onChange={(e) => settel_fixo(e.target.value)} value={tel_fixo} placeholder="Telefone Fixo" /> <br />
                <input required type="text" onChange={(e) => setrua(e.target.value)} value={rua} placeholder="Rua" /> <br />
                <input required type="number" onChange={(e) => setnumero(e.target.value)} value={numero} placeholder="Numero" /> <br />
                <input required type="text" onChange={(e) => setcomplemento(e.target.value)} value={complemento} placeholder="Complemento" /> <br />
                <input required type="text" onChange={(e) => setbairro(e.target.value)} value={bairro} placeholder="Bairro" /> <br />
                <input required type="text" onChange={(e) => setcidade(e.target.value)} value={cidade} placeholder="Cidade" /> <br />
                <input required type="text" onChange={(e) => setestado(e.target.value)} value={estado} placeholder="Estado" /> <br />
            
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}