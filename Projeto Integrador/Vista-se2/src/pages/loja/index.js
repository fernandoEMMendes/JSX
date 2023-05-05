import "../../components/css/Imagens.css"
import roupa1 from "../../components/imagens/adidas.jpg.webp"
import roupa2 from '../../components/imagens/lacoste.jpeg'
import roupa3 from "../../components/imagens/look-masculino-balada.jpg"
import roupa4 from "../../components/imagens/roupa-conforto-masculina.jfif"
import roupa5 from "../../components/imagens/roupa-casual-masculina.jpg"
import roupa6 from "../../components/imagens/roupa-casual-feminina.jpg"

import roupa7 from "../../components/imagens/roupa-de-conforto-feminina.png"
import roupa8 from "../../components/imagens/camisa-cropped-preto-plus-size.jpg.webp"
import roupa9 from "../../components/imagens/camisa-social-manga-longa-slim-lisa.jpg"
import roupa10 from "../../components/imagens/camisa-social.png"
import roupa11 from "../../components/imagens/roupa-estetica-feminina.jfif"
import roupa12 from "../../components/imagens/roupa-estética-feminina.webp"




export default function Loja() {
    return (
        <div id="area-principal">
            <h2>Roupas de conforto</h2> <br /> <br />
            <div id="postagem">
                <img src={roupa1} width="180" height="260" alt="adidas" />
                <img src={roupa2} width="180" height="260" alt="lacoste" />
                <img src={roupa3} width="180" height="260" alt="balada masculino" />
                <img src={roupa4} width="180" height="260" alt="casual masculino" />
                <img src={roupa5} width="180" height="260" alt="casual masculino" />
                <img src={roupa6} width="180" height="260" alt="casual masculino" />
            </div>
            <h2>Roupas de estética</h2>
            <div id="postagem"> <br /> <br />
                <img src={roupa7} width="180" height="260" alt="casual masculino" />
                <img src={roupa8} width="180" height="260" alt="casual masculino" />
                <img src={roupa9} width="180" height="260" alt="casual masculino" />
                <img src={roupa10} width="180" height="260" alt="casual masculino" />
                <img src={roupa11} width="180" height="260" alt="casual masculino" />
                <img src={roupa12} width="180" height="260" alt="casual masculino" />
            </div>

        </div>
    )
}