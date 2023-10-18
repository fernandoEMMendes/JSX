import {createContext, useState} from "react"
import {toast} from "react-toastify"
import apiLocal from "../apiBack/apiLocal/api"

export const AuthContext = createContext()

export default function AuthProvider({children}){
    const [user, setUser] = useState("")
    const [token, setToken] = useState("")
    
    const autenticado = !!user

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
        <AuthContext.Provider value={{signIn}}>
{children}
        </AuthContext.Provider>
    )
}
