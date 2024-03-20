import { useContext, useState } from "react"
import { Contexts } from "../../Contexts/AuthContext"

export default function Login() {

    const { FazerLogin } = useContext(Contexts)

    const email = "123"
    const password = "123"

    async function handleLogin() {
        
        const resposta = await FazerLogin(email, password)
        
        let data = JSON.stringify(resposta)
        console.log(JSON.parse(data))

        

        //localStorage.setItem("@LoginToken", data)
    }

    return (
        <div>
            <h1>Login</h1>

            <button style={{ fontSize: 50 }} onClick={handleLogin}>Fazer o Login</button>
        </div>
    )
}