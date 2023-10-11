import { Link } from "react-router-dom";

import "./Login.scss"

export default function Login() {

    const [email, setemail] = useState("")
    const [senha, setsenha] = useState("")
    

    return (
        <div>
            <div className="login_titulo">
                <h1>Login</h1>
            </div>

            <div className="login_form">
                <form>
                    <label>Email:</label>
                    <input type="text" />
                    <label>Senha:</label>
                    <input type="text" />

                    <button>Enviar</button>
                </form>
                <p>Para se cadastrar <Link to="/Cadastro">clique aqui</Link></p>
            </div>
        </div>
    )
}