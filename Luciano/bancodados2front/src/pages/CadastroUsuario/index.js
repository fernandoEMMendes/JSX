import { useState } from "react"
import "./CadastroUsuario.css"


export default function CadastroUsuario() {

    const [nome, setnome] = useState("")
    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")

    function alert(e) {
        e.preventDefault()
    }

    return (
        <div className="align">
            <h1>CadastroUsuario</h1>

            <form onSubmit={alert}>
                <label>Cadastre-se</label> <br /> <br />
                <input required type="text" value={nome} onChange={(e) => setnome(e.target.value)} placeholder="Nome" /> <br />
                <input required type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" /> <br />
                <input required type="text" value={senha} onChange={(e) => setsenha(e.target.value)} placeholder="Senha" /> <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}