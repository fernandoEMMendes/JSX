import {Link, useNavigate} from "react-router-dom"
import {useContext} from "react"
import { AuthContext } from "../../Contexts/AuthContext"

import "./Dashboard.scss"

export default function Dashboard() {

    const navigation = useNavigate()
    const {loginToken} = useContext(AuthContext)
    loginToken()

    return (
        <div>
            <div className="titulo">
                <h1>Dashboard</h1>
            </div>

            <div className="Dashboard">
                <a><Link to="/Produtos">Produtos</Link></a>
            </div>
        </div>
    )
}