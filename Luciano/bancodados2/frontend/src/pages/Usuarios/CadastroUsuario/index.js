import { useState } from "react"
import apiBack from "../../../services/apiBack"
import "./CadastroUsuario.css"
import { toast } from "react-toastify"

export default function CadastroUsuario() {

    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")

    async function alerta(e) {
        e.preventDefault(e)

        const response = await apiBack.post("/CriarUsuarios", {
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
                <input required type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" /> <br />
                <input required type="text" value={senha} onChange={(e) => setsenha(e.target.value)} placeholder="Senha" /> <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}