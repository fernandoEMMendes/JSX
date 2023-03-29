import "../../Componentes/css/pagina.css"
import box from "../../Componentes/imagens/box.jpg"
import exor from "../../Componentes/imagens/exor.jpg"
import john from "../../Componentes/imagens/john.jpg"
import shazam from "../../Componentes/imagens/shazam.jpg"
import urso from "../../Componentes/imagens/urso.jpg"



function FilmesCartaz() {
    return (
        <div className="area-principal">
            <h1>Filmes em cartaz</h1> <br />
            <img class="imagens" src={box} alt="Creed 3" style={{position: "relative"}}></img> <p> Creed III</p>
            <img src={exor} alt="13 Exorcismos" style={{position: "relative"}}></img> <p> 13 Exorcismos </p>
            <img src={john} alt="John Wick 4: Baba Yaga"></img> <p> John Wick 4: Baba Yaga </p>
            <img src={shazam} alt="Shazam! Fúria dos Deuses"></img> <p> Shazam! Fúria dos Deuses</p> 
            <img src={urso} alt="O Urso do Pó Branco"></img> <p>O Urso do Pó Branco </p>
        </div>
    )
}


export default FilmesCartaz