import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify"
import apiLocal from "../APIs/apiLocal";

export const Contexts = createContext()

export default function AuthProvider({ children }) {

    const [token, setToken] = useState("")
    const autenticado = !!token

    const lsToken = localStorage.getItem("@LoginToken")
    const stToken = JSON.parse(lsToken)

    useEffect(() => {
        async function verificarToken() {
            try {
                if (stToken) {
                    console.log(stToken)
                }

                //fazer consulta no BD para verificar Token
                // /ListarUsuarioToken <- Rota BackEnd

            } catch (err) {
                toast.error(err.response.data.error)
            }
        }
        verificarToken()
    }, [token])

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
            return resposta.data

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