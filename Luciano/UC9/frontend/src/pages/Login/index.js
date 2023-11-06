import { Link, useNavigate } from "react-router-dom";
import React, { useState, useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext"
import "./Login.scss"
import { toast } from "react-toastify"

export default function Login() {

    const navigation = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const { signIn } = useContext(AuthContext)

    async function handleLogin(e) {
        e.preventDefault(e)

        if (!email || !password) {
            toast.warning("Campos obrigatorios em branco!")
        }

        try {
            let data = {
                email,
                password
            }
            const response = await signIn(data)

            if (!response) {
                toast.error("Erro de login")
                return

                //status 200 = OK
            }
            localStorage.setItem("@tklogin2023", JSON.stringify(response.data.token))
            toast.success("Login efetuado com sucesso")
            navigation("/Dashboard")
            return
        } catch (err) {
            toast.error("Email ou senha incorretos!")
        }
    }

    return (
        <div>
            <div className="login_titulo">
                <h1>Login</h1>
            </div>

            <div className="login_form">
                <form onSubmit={handleLogin}>
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