import { Link } from "react-router-dom"
import "../css/Header.css"


function Header() {
    return (
        <div id="area-cabecalho">
            
            <div id="area-logo">
                <h1> Vista-se! <span class="branco">Loja Virtual</span></h1>
            </div>
            <div>
                <Link to="/" class="link"><h2>Home</h2></Link>
                <Link to="/QuemSomos" class="link"><h2>Quem Somos</h2></Link>
                <Link to="/Loja" class="link"><h2>Loja</h2></Link>
                <Link to="/Produtos" class="link"><h2>Produtos</h2></Link>  
                <Link to="/Contato" class="link"><h2>Contato</h2></Link>
            </div>

        </div>
    )
}

export default Header