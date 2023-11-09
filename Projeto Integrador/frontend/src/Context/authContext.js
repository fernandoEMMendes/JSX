import { createContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import apiLocal from "../services/apiLocal"

export const authContext = createContext()
export default function authenticator({ children }) {
    const [user, setUser] = useState("")
    const isAuth = !!user

    const lsToken = localStorage.getItem("@vistaseToken")
    const token = JSON.parse(lsToken)

    async function loginVerify() {
        try {
            const response = await apiLocal.get("/ListarUsuarioToken", {
                headers: {
                    Authorization: "Bearer" + `${token}`
                }
            })
            setUser(response)
        } catch (err) {
            toast.warning("Erro ao validar login!")
            return
        }
    }

    async function signIn({ email, password }) {
        try {
            const response = await apiLocal.post("/login", {
                email,
                password
            })
        } catch (err) {
            toast.warning("Erro ao fazer login")
            return
        }
    }

    return (
        <authContext.Provider value={{ loginVerify, signIn }}>
            {children}
        </authContext.Provider>
    )
}

//na hora de chamar ela em alguma página, ela deve ser chamada assim

// ->Página de Login<-
//import {authContext} from "rota do context"
//import {useNavigate} from "react-router-dom"
//import {useContext} from "react"
//
//const navigation = useNavigation()
//const [email, setEmail] = useState("")
//const [password, setPassword] = useState("")
//const {signIn} = useContext(authContext)
//
//async function handleLogin(e) {
//  e.preventDefault(e)
//  
//  try {
//      let data = {
//        email,
//        password
//      }
//
//    const response = await signIn(data)
//    const token = response.data.token
//    localStorage.setItem("@vistaseToken", JSON.stringify(token))
//    navigation("/Dashboard")
//   } catch (err) {
//    toast.error("Email ou senha incorretos!")
//    return
//  }
//}




// ->Demais páginas<-
//import {authContext} from "rota do context"
//import {useNavigate} from "react-router-dom"
//import {useContext} from "react"
//
//const navigation = useNavigate()
//const {loginToken} = useContext(authContext)
//useEffect(() => {
//    const lsToken = localStorage.getItem("@vistaseToken")
//    const token = JSON.parse(lsToken)
//
//    if(!token) {
//        navigation("/")
//        return
//    }
//
//    loginToken()
//}, [])