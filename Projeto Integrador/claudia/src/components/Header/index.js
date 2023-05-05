import { Link } from "react-router-dom";
import "../../css/Header.css"

function Header() {
    return (
        <div className="area-cabecalho">
            <Link to="/">LOGO</Link>
            <Link to="/Produtos">Produtos</Link>
            <Link to="/QuemSomos">Quem Somos</Link>
            <Link to="/Contato">Contato</Link>
        </div>
    )
}


export default Header