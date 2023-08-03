import { Link } from "react-router-dom"
import "../css/Header.css"

function Header() {
    return (
        <>
            <div id="areacabecalho">
                <div>
                    <Link to="/"><h2 class="home">WebFilmes</h2></Link>
                </div>
                <div class="dropdown">
                    <h2 class="filmes">Filmes</h2>
                    <div class="dropdown-content">
                        <Link to="/FilmesCartaz"> Em Cartaz </Link> <br />
                        <Link to="/FilmesMaisBemAvaliados">Mais Bem Avaliados</Link> <br />
                        <Link to="/FilmesPopulares">Populares</Link> <br />
                    </div>
                </div>
                <div class="dropdown">
                    <h2 class="series">Séries</h2>
                    <div class="dropdown-content">
                        <Link to="/SeriesNoAr"> No Ar</Link> <br />
                        <Link to="/SeriesMaisBemAvaliadas">Mais Bem Avaliadas</Link> <br />
                        <Link to="/SeriesPopulares">Populares</Link> <br />
                    </div>
                </div>
                <Link to="/Contato"><h2 class="contato">Contato</h2></Link>
                <Link to="/Favoritos"><h2 className="contato">Favoritos</h2></Link>
            </div>

        </>
    )

}

export default Header