import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Contexts } from "../../Contexts/AuthContext"

export default function Login() {

    const navigation = useNavigate()

    const { FazerLogin, VerificarToken } = useContext(Contexts)

    const email = "123"
    const password = "123"

    useEffect(() => {
        VerificarToken()
    }, []);

    async function handleLogin(e) {
        e.preventDefault()
        await FazerLogin(email, password)
        VerificarToken()
    }

    return (
        <div>
            <h1>Login</h1>

            <button style={{ fontSize: 50 }} onClick={handleLogin}>Fazer o Login</button>
        </div>
    )
}