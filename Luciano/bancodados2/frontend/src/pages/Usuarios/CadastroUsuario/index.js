import { useState } from "react"
import apiBack from "../../../services/apiBack"
import "./CadastroUsuario.css"
import { toast } from "react-toastify"

export default function CadastroUsuario() {

    const [nome, setnome] = useState("")
    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")

    async function alerta(e) {
        e.preventDefault(e)
        if (!nome, !email, !senha) {
            toast.warning("Existem campos em Branco")
            return
        }
        
        const response = await apiBack.post("/CriarUsuarios", {
            nome,
            email,
            senha
        })
        toast.success(response.data.dados)
    }

    return (
        <div className="align">
            <h1>Cadastro Usuario</h1>

            <form onSubmit={alerta}>
                <label>Cadastre-se</label> <br /> <br />
                <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} placeholder="Nome" /> <br />
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" /> <br />
                <input type="password" value={senha} onChange={(e) => setsenha(e.target.value)} placeholder="Senha" /> <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}