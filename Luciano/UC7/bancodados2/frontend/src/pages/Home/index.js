import { Link } from "react-router-dom"
import "./Home.css"


export default function Home() {


    return (
        <div className="align">
            <h1>Seletor de LINKs</h1>
            <Link to={"/LoginUsuario"} className="link">Login de Usuario</Link> <br />
            <h1>----------------------------</h1> <br />
            <Link to={"/CadastroUsuario"} className="link">Cadastro de Usuario</Link> <br /> <br />
        </div>
    )
}