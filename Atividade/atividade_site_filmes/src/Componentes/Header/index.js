import { Link } from "react-router-dom"
import "../css/Header.css"

function Header() {
    return (
        <>
            <div>
                <Link to="/"> Home </Link>
            </div> <br />
            <div>
                <Link to="/Contato"> Contato </Link>
            </div> <br />
            <div class="dropdown">
                <span> Filmes </span>
                <div class="dropdown-content">
                    <Link to="/FilmesCartaz"> Em Cartaz </Link> <br />
                    <Link to="/FilmesMaisBemAvaliados">Mais Bem Avaliados</Link> <br />
                    <Link to="/FilmesPopulares">Populares</Link> <br />
                </div>
            </div>
            <div class="dropdown">
                <span> Séries </span>
                <div class="dropdown-content">
                    <Link to="/SeriesNoAr"> No Ar</Link> <br />
                    <Link to="/SeriesMaisBemAvaliadas">Mais Bem Avaliadas</Link> <br />
                    <Link to="/SeriesPopulares">Populares</Link> <br />
                </div>
            </div>
        </>
    )

}

export default Header