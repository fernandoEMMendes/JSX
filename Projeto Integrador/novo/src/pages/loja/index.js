import "../../components/css/Imagens.css"
import roupa1 from "../../components/imagens/adidas.jpg.webp"
import roupa2 from '../../components/imagens/lacoste.jpeg'
import roupa3 from "../../components/imagens/look-masculino-balada.jpg"
import roupa4 from "../../components/imagens/roupa-conforto-masculina.jfif"
import roupa5 from "../../components/imagens/roupa-casual-masculina.jpg"
import roupa6 from "../../components/imagens/roupa-casual-feminina.jpg"
import roupa7 from "../../components/imagens/roupa-de-pijama.png"
import roupa8 from "../../components/imagens/roupa-de-conforto-feminina.png"
import roupa9 from "../../components/imagens/camisa-cropped-preto-plus-size.jpg.webp"
import roupa10 from "../../components/imagens/camisa-social-manga-longa-slim-lisa.jpg"
import roupa11 from "../../components/imagens/camisa-social.png"
import roupa12 from "../../components/imagens/roupa-estetica-feminina.jfif"
import roupa13 from "../../components/imagens/roupa-estética-feminina.webp"
import roupa14 from "../../components/imagens/roupa-de-casa-feminina.png"





export default function Loja() {
    return (
        <div id="area-principal">
            <h2>Roupas de conforto</h2>
            <div id="area-postagens">
                <div class="postagem">
                    <img src={roupa1} alt="adidas" />
                    <img src={roupa2} alt="lacoste" />
                    <img src={roupa3} alt="balada masculino" />
                    <img src={roupa4} alt="casual masculino" />
                    <img src={roupa5} alt="casual masculino" />
                    <img src={roupa6} alt="casual masculino" />
                    <img src={roupa7} alt="casual masculino" />
                    <img src={roupa8} alt="casual masculino" />
                    <img src={roupa9} alt="casual masculino" />
                    <img src={roupa10} alt="casual masculino" />
                    <img src={roupa11} alt="casual masculino" />
                    <img src={roupa12}alt="casual masculino" />
                    <img src={roupa13} alt="casual masculino" />
                    <img src={roupa14} alt="casual masculino" />
                </div>
            </div>

        </div>
    )
}