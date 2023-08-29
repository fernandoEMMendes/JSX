import { useState } from "react";
import "./LoginUsuario.css"



export default function LoginUsuario() {

    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");

    function alert(e) {
        e.preventDefault()
    }

    return (
        <div className="align">
            <h1>LoginUsuario</h1>

            <form onSubmit={alert}>
                <label>Login</label> <br /> <br />
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" /> <br />
                <input type="text" value={senha} onChange={(e) => setsenha(e.target.value)} placeholder="Senha" /> <br />

                <button type="submit">Logar</button>
            </form>
        </div>
    )
}