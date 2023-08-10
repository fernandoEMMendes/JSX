import "../../Componentes/css/pagina.css"
import { Link } from "react-router-dom"

function Webseries() {
    return (
        <>
            <div class="area-principal">
                <h1 className="formatar">Me desculpe mas nossa site foi projeto para filmes apenas!</h1>
                <br />
                <h2 className="formatar">Para séries e relacionados acesse</h2>
                <Link className="formatar" to={"/"}><h2>WebSeries</h2></Link>
            </div >

        </>
    )
}

export default Webseries