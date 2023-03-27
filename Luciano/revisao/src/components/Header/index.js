import {Link} from "react-router-dom"


function Header() {

    return(
        <div>
            <Link to='/'>Home</Link> <br />
            <Link to='Quemsomos'>Quem Somos</Link> <br />
            <Link to='Cadastro'>Cadastre-se</Link>
        </div>
    )
}


export default Header