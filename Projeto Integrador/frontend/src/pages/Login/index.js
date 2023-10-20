import React, { useState } from 'react'
import "./Login.css"
import { toast } from "react-toastify"
import apiBack from "../../services/apiBack"
import { useNavigate } from "react-router-dom"

export default function Login() {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')


    async function handleLogin(event) {
        event.preventDefault(event)
        if (!email || !senha) {
            toast.warn('Há campos em branco!')
            return
        }

        try {
            const response = await apiBack.post("/Login", {
                email,
                senha
            })
            toast.success(response.data.dados)
            navigation("/")
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }


    return (
        <div className='container-fluid alignform'>
            <br />

            <h1>Login Vista-se !</h1>

            <form onSubmit={handleLogin}>
                <label><strong>E-mail:</strong></label>
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}

                /><br />
                <label><strong>Senha:</strong></label>
                <input
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}

                /><br /><br />


                <button type='submit' ><strong>logar</strong></button>
            </form>
        </div>
    )
}