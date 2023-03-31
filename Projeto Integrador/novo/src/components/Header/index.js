import { Link } from "react-router-dom"
import "../css/Header.css"
  //os <a href> são links antigos que tem que ser mudado para o route, eles ainda não possuem página própria
  //ainda falta ser feito muitas mudanças no CSS
  //a tabela feita no estoque, não funcionou então vamos ter que ver como fazer uma no java script react
function Header() {
    return (
        <div id="area-cabecalho">

            <div id="area-logo">
                <h1> Vista-se! <span class="branco">Loja Virtual</span></h1>
            </div>
            <div id="area-menu">
                <Link to="/" class="link">Home</Link>
                <Link to="/QuemSomos" class="link">Quem Somos</Link>
                <a href="loja.html">Loja</a>     
                <a href="contato.html">Contato</a>
            </div>

        </div>
    )
}

export default Header