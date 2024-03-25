import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"
import apiLocal from "../APIs/apiLocal";

export const Contexts = createContext()

export default function AuthProvider({ children }) {

    const [token, setToken] = useState("")
    const autenticado = !!token

    async function VerificarToken() {
        try {

            const lsToken = localStorage.getItem("@LoginToken")
            if (!lsToken) {
                setToken("")
                return
            }


            const stToken = JSON.parse(lsToken)
            const bearerToken = (stToken.token)

            const response = await apiLocal.get("/ListarUsuarioToken", {
                headers: {
                    Authorization: "Bearer " + `${bearerToken}`
                }
            })

            if (response.data.id) {
                setToken(response.data.id)
            } else {
                setToken("")
            }

        } catch (err) {
            toast.error(err.response.data.error)
            setToken("")
        }
    }

    async function FazerLogin(email, password) {
        try {
            if (!email || !password) {
                toast.error("Campos em brancos não são permitidos")
                return
            }

            const resposta = await apiLocal.post("/LoginUsuarios", {
                email, password
            })
            toast.success("Logado com sucesso! 👌", {
                toastId: "toastId"
            })

            localStorage.removeItem("@LoginToken")
            localStorage.setItem("@LoginToken", JSON.stringify(resposta.data))

        } catch (err) {
            toast.warning(err.response.data.error)
            setToken("")
        }
    }

    return (
        <Contexts.Provider value={{ autenticado, FazerLogin, VerificarToken }}>
            {children}
        </Contexts.Provider>
    )
}