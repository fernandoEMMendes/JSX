import "../../Componentes/css/pagina.css"
import box from "../../Componentes/imagens/box.jpg"
import exor from "../../Componentes/imagens/exor.jpg"
import john from "../../Componentes/imagens/john.jpg"
import shazam from "../../Componentes/imagens/shazam.jpg"
import urso from "../../Componentes/imagens/urso.jpg"



function FilmesCartaz() {
    return (
        <>
            <div class="borda">
                <div class="caixa">
                    <h1>Filmes em cartaz</h1> <br />
                    <img src={box} alt="Creed 3"></img>
                    <p> Creed III </p>
                    <p>"Depois de dominar o mundo do boxe, Adonis Creed tem prosperado em sua carreira e vida familiar. Quando um amigo de infância e ex-prodígio do boxe, Damien Anderson, ressurge depois de cumprir uma longa sentença na prisão, ele está ansioso para provar que merece sua chance no ringue. O confronto entre ex-amigos é mais do que apenas uma briga. Para acertar as contas, Adonis deve colocar seu futuro em risco para lutar contra Damien - um lutador que não tem nada a perder."</p>
                </div>
            </div>
            <div class="borda">
                <div class="caixa">
                    <img src={exor} alt="13 Exorcismos"></img>
                    <p> 13 Exorcismos </p>
                    <p>"Depois de invocar espíritos com um grupo de amigos, Laura Villegas começa a se comportar de forma estranha. Presenças sombrias, visões aterrorizantes, vozes sinistras, marcas dolorosas em sua pele e outros fenômenos paranormais começam a assombrá-la por onde quer que ela vá. Sua família aceita chamar um exorcista sancionado pelo Vaticano para intervir no caso de possessão demoníaca. Para salvar Laura e libertá-la, o padre terá que realizar uma série de exorcismos, cada um mais aterrorizante que o outro."</p>
                </div>
            </div>
            <div class="borda">
                <div class="caixa">
                    <img src={john} alt="John Wick 4: Baba Yaga"></img>
                    <p> John Wick 4: Baba Yaga </p>
                    <p>"Com o preço por sua cabeça cada vez maior, John Wick leva sua luta contra a alta mesa global enquanto procura os jogadores mais poderosos do submundo, de Nova York a Paris, de Osaka a Berlim."</p>
                </div>
            </div>
            <div class="borda">
                <div class="caixa">
                    <img src={shazam} alt="Shazam! Fúria dos Deuses"></img>
                    <p>Shazam! Fúria dos Deuses</p>
                    <p>"Continua a história do adolescente Billy Batson que, ao recitar a palavra mágica “SHAZAM!”, é transformado em seu alto ego adulto de super-herói, Shazam."</p>
                </div>
            </div>

            <div class="borda">
                <div class="caixa">
                    <img src={urso} alt="O Urso do Pó Branco"></img>
                    <p>O Urso do Pó Branco </p>
                    <p>"Continua a história do adolescente Billy Batson que, ao recitar a palavra mágica “SHAZAM!”, é transformado em seu alto ego adulto de super-herói, Shazam."</p>
                </div>
            </div >
            <footer>
                <p>WebFlix - 2023</p>
            </footer>

        </>
    )
}


export default FilmesCartaz