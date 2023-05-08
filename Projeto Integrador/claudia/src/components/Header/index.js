import { Link } from "react-router-dom";
import "../../css/Header.css"

function Header() {
    return (
        <div className="area-cabecalho">

            <div className="dropdown">
                <button className="dropdownbuton">LOGO</button>
                <div className="dropdown-content">
                    <Link to="/QuemSomos">Quem Somos</Link>
                    <Link to="/Produtos">Produtos</Link>
                </div>
            </div>

            <div className="linkcssdiv">
                <Link to="/Contato" className="linkcss">Contato</Link>
            </div>

        </div>
    )
}


export default Header