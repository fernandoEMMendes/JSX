import { useState } from "react";
import { toast } from "react-toastify";
import apiBack from "../../../services/apiBack";
import "./LoginUsuario.css"



export default function LoginUsuario() {

    const [email, setemail] = useState("");
    const [senha, setsenha] = useState("");

    async function alerta(e) {
        e.preventDefault(e)

        const response = await apiBack.post("/LoginUsuario", {
            email,
            senha
        })
        toast.success(response.data.dados)
    }

    return (
        <div className="align">
            <h1>LoginUsuario</h1>

            <form onSubmit={alerta}>

                <h1>Email</h1>
                <input type="text" value={email} onChange={(e) => setemail(e.target.value)} placeholder="E-Mail" /> <br />
                <h1>Senha</h1>
                <input type="text" value={senha} onChange={(e) => setsenha(e.target.value)} placeholder="Senha" /> <br />
                <br />
                <button type="submit">Logar</button>
            </form>
        </div>
    )
}