import "../../Componentes/css/pagina.css"
import box from "../../Componentes/imagens/box.jpg"
import exor from "../../Componentes/imagens/exor.jpg"
import john from "../../Componentes/imagens/john.jpg"
import shazam from "../../Componentes/imagens/shazam.jpg"
import urso from "../../Componentes/imagens/urso.jpg"



function FilmesCartaz() {
    return (
        <>
            <h1>Filmes em cartaz</h1> <br />
            <div class="areapostagem">
                <div class="borda">
                    <div class="caixa">
                        <img src={box} alt="Creed 3"></img>
                        <h3> Creed III </h3>

                    </div>
                </div>
                <div class="borda">
                    <div class="caixa">
                        <img src={exor} alt="13 Exorcismos"></img>
                        <h3> 13 Exorcismos </h3>

                    </div>
                </div>
                <div class="borda">
                    <div class="caixa">
                        <img src={john} alt="John Wick 4: Baba Yaga"></img>
                        <h3> John Wick 4: Baba Yaga </h3>

                    </div>
                </div>
                <div class="borda">
                    <div class="caixa">
                        <img src={shazam} alt="Shazam! Fúria dos Deuses"></img>
                        <h3>Shazam! Fúria dos Deuses</h3>

                    </div>
                </div>

                <div class="borda">
                    <div class="caixa">
                        <img src={urso} alt="O Urso do Pó Branco"></img>
                        <h3>O Urso do Pó Branco </h3>

                    </div>
                </div >
                <footer>
                    <p>WebFlix - 2023</p>
                </footer>
            </div>

        </>
    )
}


export default FilmesCartaz