import { useState } from "react"
import apiBack from "../../services/apiBack"
import "./CadastroUsuario.css"


export default function CadastroUsuario() {

    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")

    function alerta(e) {
        e.preventDefault(e)

        apiBack.post("/CriarUsuarios", {
            email,
            senha
        })
        alert("Enviado")
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