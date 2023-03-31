import { Link } from 'react-router-dom'
import './styles.css'

export default function Header(){

    return(
        <div id="fundo">

  <h2 class="h1">Sinopse de Filmes</h2>

  <Link to='/'><h2 class="inicio">Início</h2></Link>

<div class="dropdown">
  <button class="dropbtn"><h2 class="filmes">Filmes</h2></button>
  <div class="dropdown-content">
  <Link to='/Filmes'>Populares</Link>
  <Link to='/cartaz'>Em Cartaz</Link>
  <Link to='/estreias'>Estreias</Link>
  </div>
</div>

<div class="dropdown">
  <button class="dropbtn"><h2 class="series">Séries</h2></button>
  <div class="dropdown-content">
  <Link to='/SerieP'>Populares</Link>
  <Link to='/Hojetv'>Hoje na TV</Link>
  <Link to='/tv'>Na TV</Link>
  </div>
</div>

<Link to='/Cadastro'><h2 class="contato">Contato</h2></Link>

</div>
    )
    
}