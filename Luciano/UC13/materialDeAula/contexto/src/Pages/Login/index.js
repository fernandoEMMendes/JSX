import { useContext } from "react"
import { Contexts } from "../../Contexts/AuthContext"

export default function Login() {

    const { FazerLogin } = useContext(Contexts)

    const email = "123"
    const password = "123"

    async function handleLogin() {
        await FazerLogin(email, password)
    }

    return (
        <div>
            <h1>Login</h1>

            <button style={{fontSize: 50}} onClick={handleLogin}>Fazer o Login</button>
        </div>
    )
}