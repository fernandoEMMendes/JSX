import { useState } from "react"

import "../../css/Home.css"

export default function Home() {

    const [vida, setvida] = useState(100)
    const [vida2, setvida2] = useState(100)

    function ataque() {
        if (vida2 <= 0) {
            alert("Venceu!")
        } else {
            //calculo - erro (personagem) + critico (inimigo)
            if (Math.round(Math.random() * 10) === 0) {

                alert("O ataque falhou! Você abaixou sua defesa o suficiente para um acerto crítico!")
                if (Math.round(Math.random() * 10) === 0) {

                    alert("O inimigo errou! Considere-se a salvo.")
                    return

                } else {
                    setvida(vida - Math.round(Math.random() * 9 + 11))
                }
                return

                //calculo dano (personagem)
            } else {
                setvida2(vida2 - Math.round(Math.random() * 4 + 1))
            }
        }

        if (vida <= 0) {
            alert("Perdeu!")
        } else {
            //calculo - erro (inimigo) ou dano (inimigo)
            if (Math.round(Math.random() * 9 + 1) <= 1) {

                alert("O inimigo errou! Considere-se a salvo.")
                return

            } else {
                setvida(vida - Math.round(Math.random() * 9 + 1))
            }
        }
    }

    function cura() {
        if (vida <= 0) {
            alert("Perdeu!")
        } else {
            //calculo - erro (personagem)
            alert("Você recua, colocando-o em um estado defensivo [+50% DEF] e utiliza um elixir de cor carmesim.")

            if (Math.round(Math.random() * 19 + 1 === 0)) {
                alert("infelizmente você se descuida e deixa o frasco cair, quebrando-o em pedaços e deixando o líquido vermelho entrar em meio ao terreno rochoso")
            } else {
                setvida(vida + Math.round(Math.random() * 49 + 1))

                //calculo - erro (inimigo)
                if (Math.round(Math.random() * 10) === 0) {

                    alert("O inimigo errou! Considere-se a salvo.")
                    return

                } else {
                    setvida(vida - Math.round(Math.random() * 4 + 1))
                }
                return

            }
        }
    }

    return (
        <>
            <div>
                <h1>Teste</h1><br /><br />
                <button onClick={ataque}>Investida (Força: 1 x D5 [90%])</button><br />
                <button onClick={cura}>Cura (Efeito: 1 x D50 [95%])</button><br /> <br />

                <a>HP: {vida}</a> <br /> <br />
                <a>(-_-)</a><br /><br />

                <a>HP: {vida2}</a><br />
                <a>FOR: (1 x D10 [80%])</a><br /> <br />
                <a>Precisão: [80%]</a>
                <a>()_()</a><br />
            </div>
        </>
    )
}