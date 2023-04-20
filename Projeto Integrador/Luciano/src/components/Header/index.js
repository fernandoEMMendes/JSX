import {Link} from "react-router-dom"

import "../css/Header.css"


function Header() {

    return(
        <div className="areaheader">
            <Link to='/' className="home"><h3>IceDex</h3></Link> <br />
            <Link to='Quemsomos' className="links">Quem Somos</Link> <br />
            <Link to='Cadastro' className="links">Cadastre-se</Link>
        </div>
    )
}


export default Header