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
        } else if (senha.length < 5){
            toast.warning("A senha deve conter no minimo 5 caracteres")
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
                <input type="text" value={nome} onChange={(e) => setnome(e.target.value)} placeholder="Nome" style={{width: 300, height: 20}}/> <br />
                <input type="email" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" style={{width: 300, height: 20}}/> <br />
                <input type="password" value={senha} onChange={(e) => setsenha(e.target.value)} placeholder="Senha" style={{width: 300, height: 20}}/> <br />

                <button type="submit" style={{ fontSize: 20 }}>Cadastrar</button>
            </form>
        </div>
    )
}