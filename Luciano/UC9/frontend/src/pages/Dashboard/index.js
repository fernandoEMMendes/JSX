import { Link, useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react"
import { AuthContext } from "../../Contexts/AuthContext"
import "./Dashboard.scss"
import { toast } from "react-toastify"

export default function Dashboard() {

    const navigation = useNavigate()
    const { loginToken } = useContext(AuthContext)
    useEffect(() => {
        const lsToken = localStorage.getItem("@tklogin2023")
        const token = JSON.parse(lsToken)

        if (!token) {
            navigation("/")
            return
        }

        loginToken()
    }, [])

    function handleSair() {
        localStorage.removeItem("@tklogin2023")
        toast.info("Logout efetuado com sucesso!")
        navigation("/")
    }

    return (
        <div>
            <div className="titulo">
                <h1>Dashboard</h1>
            </div>

            <div className="Dashboard">
                <a><Link to="/Produtos">Produtos</Link></a>
                <button onClick={handleSair}>Sair</button>
            </div>
        </div>
    )
}