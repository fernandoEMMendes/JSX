import {Link} from "react-router-dom"
import "./Dashboard.scss"

export default function Dashboard() {
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