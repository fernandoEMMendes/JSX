import { Link } from "react-router-dom"
import "../css/Header.css"

function Header() {
    return (
        <>
            <div id="areacabecalho">
                <div>
                    <span class="marca">WebFilmes</span> < br />
                    <Link to="/" class="link"> Home </Link>
                    <Link to="/Contato" class="link"> Contato </Link>
                </div> <br />
                <div class="dropdown">
                    <span class="container"> Filmes </span>
                    <div class="dropdown-content">
                        <Link to="/FilmesCartaz"> Em Cartaz </Link> <br />
                        <Link to="/FilmesMaisBemAvaliados">Mais Bem Avaliados</Link> <br />
                        <Link to="/FilmesPopulares">Populares</Link> <br />
                    </div>
                </div>
                <div class="dropdown">
                    <span class="container"> Séries </span>
                    <div class="dropdown-content">
                        <Link to="/SeriesNoAr"> No Ar</Link> <br />
                        <Link to="/SeriesMaisBemAvaliadas">Mais Bem Avaliadas</Link> <br />
                        <Link to="/SeriesPopulares">Populares</Link> <br />
                    </div>
                </div>
            </div>

        </>
    )

}

export default Header