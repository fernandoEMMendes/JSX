import { Link } from "react-router-dom";
import { useState } from "react";

import "./Login.scss"

export default function Login() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        console.log(email, password)
    }

    return (
        <div>
            <div className="login_titulo">
                <h1>Login</h1>
            </div>

            <div className="login_form">
                <form onSubmit={handleSubmit}>
                    <label>Email:</label>
                    <input type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                    <label>Senha:</label>
                    <input type="text" value={password} onChange={(e) => { setPassword(e.target.value) }} />

                    <button type="submit">Enviar</button>
                </form>
                <p>Para se cadastrar <Link to="/Cadastro">clique aqui</Link></p>
            </div>
        </div>
    )
}