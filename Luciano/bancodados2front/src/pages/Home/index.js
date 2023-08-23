import { Link } from "react-router-dom"
import "./Home.css"


export default function Home() {


    return(
        <div>
            <h1>Mambo Jambo</h1>
            <Link to={"/LoginUsuario"}>Login de Usuario</Link> <br /> <br />
            <Link to={"/CadastroUsuario"}>Cadastro de Usuario</Link> <br /> <br />
            <Link to={"/CadastroClientes"}>Cadastro de Clientes</Link> <br /> <br /> 
            <Link to={"/CadastroProdutos"}>Cadastro de Produtos</Link>
            <h1>-------------</h1>
            <Link to={"/ListarClientes"}>Listar Clientes</Link> <br /> <br />
        </div>
    )
}