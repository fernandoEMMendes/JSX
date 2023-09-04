import { Link } from "react-router-dom"
import "./Home.css"


export default function Home() {


    return (
        <div className="align">
            <h1>Mambo Jambo</h1>
            <Link to={"/LoginUsuario"} className="link">Login de Usuario</Link> <br /> <br />
            <Link to={"/CadastroUsuario"} className="link">Cadastro de Usuario</Link> <br /> <br />
            <Link to={"/CadastroClientes"} className="link">Cadastro de Clientes</Link> <br /> <br />
            <Link to={"/CadastroProdutos"} className="link">Cadastro de Produtos</Link>
            <h1>-------------</h1>
            <Link to={"/ListarClientes"} className="link">Listar Clientes</Link> <br /> <br />
            <Link to={"/ListarProdutos"} className="link">Listar Produtos</Link> <br /> <br />
            <Link to={"/ListarUsuarios"} className="link">Listar Usuarios</Link> <br /> <br />
        </div>
    )
}