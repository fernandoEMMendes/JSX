import { Link } from "react-router-dom"
import "./Inicio.css"

export default function Inicio() {
    return (
        <>
            <div>
                <h1>Início</h1> <br />
            </div>

            <div>
                <Link className="link" to="/Produtos">Produtos</Link> <br /> <br />
                <Link className="link" to="/Clientes">Clientes</Link> <br /> <br />
                <Link className="link" to="/Login">Login</Link> <br /> <br />
                <Link className="link" to="/CriarUsuarios">Criar Usuarios</Link> <br /> <br />
                <Link className="link" to="/ListarUsuarios">Listar Usuarios</Link> <br /> <br />
            </div>
        </>
    )
}