import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"
import apiLocal from "../APIs/apiLocal";

export const Contexts = createContext()

export default function AuthProvider({ children }) {

    const autenticado = false

    async function FazerLogin(email, password) {
        try {
            if (!email || !password) {
                toast.error("Campos em brancos não são permitidos")
                return
            }

            const resposta = await apiLocal.post("/LoginUsuarios", {
                email, password
            })
            toast.success("Logado com sucesso! 👌")
            console.log(resposta.data)

        } catch (err) {
            toast.warning(err.response.data.error)
        }
    }

    return (
        <Contexts.Provider value={{ autenticado, FazerLogin }}>
            {children}
        </Contexts.Provider>
    )
}