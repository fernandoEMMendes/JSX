import {createContext, useState} from "react"
import {toast} from "react-toastify"
import apiLocal from "../api/apiLocal/api"

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [user, setUser] = useState("")
    
    const autenticado = !!user

    const LSToken = localStorage.getItem("@tklogin2023")
    const token = JSON.parse(LSToken)

    async function loginToken(){
        try {
            const response = await apiLocal.get("/ListarUsuarioToken", {
                headers: {
                    Authorization: "Bearer " + `${token}`
                }
            })
            console.log(response)

        } catch(err) {
            toast.warning("Token inválido")
        }
    }


    async function signIn({email, password}){
        try {
            const response = await apiLocal.post("Login", {
                email,
                password
            })
            return response
        } catch(err) {
            
        }
    }

    return(
        <AuthContext.Provider value={{signIn, loginToken}}>
{children}
        </AuthContext.Provider>
    )
}
