import { Link } from "react-router-dom"
import "./Dashboard.css"


export default function Dashboard() {


    return (
        <>


            <div className="align">
                <h1>Seletor de LINKs</h1>
                <Link to={"/ListarClientes"} className="link">Listar Clientes</Link> <br /> <br />
                <Link to={"/ListarProdutos"} className="link">Listar Produtos</Link> <br /> <br />
                <Link to={"/ListarUsuarios"} className="link">Listar Usuarios</Link> <br /> <br />
            </div>
        </>
    )
}