import { Link } from "react-router-dom"
import "../css/Header.css"
  //os <a href> são links antigos que tem que ser mudado para o route, eles ainda não possuem página própria
  //ainda falta ser feito MUITAS mudanças no CSS
  //a tabela feita no estoque, não funcionou então vamos ter que ver como fazer uma no java script react
function Header() {
    return (
        <div id="area-cabecalho">

            <div id="area-logo">
                <h1> Vista-se! <span class="branco">Loja Virtual</span></h1>
            </div>
            <div>
                <Link to="/" class="link"><h2>Home</h2></Link>
                <Link to="/QuemSomos" class="link"><h2>Quem Somos</h2></Link>
                <Link to="/" className="link"><h2>Loja</h2></Link>     
                <Link to="/" className="link"><h2>Contato</h2></Link>
            </div>

        </div>
    )
}

export default Header