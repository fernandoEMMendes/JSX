import "../../components/css/pagina.css"
import moda from "../../components/imagens/moda.png"

function Home() {
    return (
        
            <div id="area-principal">
                <h2>Nossas postagens</h2><br />
                <div id="area-postagens">
                    <div class="postagem">
                        <h3>A importancia da moda no dia a dia</h3>
                        <img class="imgpostagem"src={moda} alt="moda"/>
                        <p class="texto">
                            O fato é que quando a pessoa se sente empoderada,
                            segura através de sua imagem, de sua vestimenta,
                            ela acaba melhorando sua vida pessoal,
                            profissional e sorrisos não faltam, o que vamos combinar, só contagia a tudo e todos,
                            inclusive o ambiente onde estiver.
                        </p>
                    </div>
                </div>
            </div>
        
    )
}

export default Home