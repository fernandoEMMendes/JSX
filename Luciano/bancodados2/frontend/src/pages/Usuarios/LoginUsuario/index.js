import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import apiBack from '../../../services/apiBack'
import { toast } from 'react-toastify'
import './LoginUsuario.css'

export default function Login() {
    const navigation = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function AuthLogin(e) {
        e.preventDefault(e)
        if (!email || !password) {
            toast.warn('Existem Campos em Branco')
            return
        }
        try {
            const response = await apiBack.post('/AuthLogin', {
                email,
                password
            })
            navigation('/Dashboard')
            toast.success(response.data.dados)
        } catch (err) {
            toast.error(err.response.data.error)
        }
    }

    return (
        <div className='align' >
            <h1>Login</h1>

            <form onSubmit={AuthLogin}>
                <input type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />

                <br />

                <input type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Senha"
                />
                <div>
                    <button type='submit'>Enviar</button>
                </div>
            </form>

        </div>
    )
}