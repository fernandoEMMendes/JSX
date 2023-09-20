import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
import apiBack from "../../../services/apiBack";
import "./LoginUsuario.css"



export default function LoginUsuario() {

    const navigation = useNavigate()
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");

    async function alerta(e) {
        if (!email, !password) {
            toast.warning("Existem campos em Branco")
            return
        }
        try {
            e.preventDefault(e)

            const response = await apiBack.post("/LoginUsuario", {
                email,
                password
            })
            toast.success(response.data.dados)
            navigation("/ListarUsuarios")
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return (
        <div className="align">
            <h1>LoginUsuario</h1>

            <form onSubmit={alerta}>

                <h1>Email</h1>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" /> <br />
                <h1>Senha</h1>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Senha" /> <br />
                <br />
                <button type="submit">Logar</button>
            </form>
        </div>
    )
}