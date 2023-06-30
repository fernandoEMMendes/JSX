import { useState } from "react"

import "../../css/Home.css"

export default function Home() {

    const [vida, setvida] = useState(100)
    const [vida2, setvida2] = useState(100)

    function ataque() {
        if (vida2 <= 0) {
            alert("Venceu!")
            return
        } else {
            //calculo - erro (personagem) + critico (inimigo)
            if (Math.round(Math.random() * 10) <= 1) {

                alert("O ataque falhou! Você abaixou sua defesa o suficiente para um acerto crítico!")
                if (Math.round(Math.random() * 10) <= 1) {

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
            return
        } else {
            //calculo - erro (inimigo) ou dano (inimigo)
            if (Math.round(Math.random() * 10) <= 1) {

                alert("O inimigo errou! Considere-se a salvo.")
                return

            } else {
                setvida(vida - Math.round(Math.random() * 9 + 1))
            }
        }
    }

    function cura() {

        if (vida2 <= 0) {
            alert("Venceu!")
            return
        } else {
            if (vida <= 0) {
                alert("Perdeu!")
                return
            } else {

                //calculo - erro (personagem)
                if (Math.round(Math.random() * 20 <= 1)) {
                    alert("Você recua, colocando-o em um estado defensivo [+50% DEF], infelizmente você se descuida e deixa o frasco cair, quebrando-o em pedaços e deixando o líquido vermelho entrar em meio ao terreno rochoso")

                    //calculo - erro (inimigo)
                    if (Math.round(Math.random() * 10) <= 1) {

                        alert("O inimigo errou! Considere-se a salvo.")
                        return

                    } else {
                        setvida(vida - Math.round(Math.random() * 4 + 1))
                        return
                    }

                } else {
                    alert("Você recua, colocando-o em um estado defensivo [+50% DEF] e utiliza um elixir de cor carmesim.")
                    setvida(vida + (25))

                    //calculo - erro (inimigo)
                    if (Math.round(Math.random() * 10) <= 1) {

                        alert("O inimigo errou! Considere-se a salvo.")

                    } else {
                        setvida(vida - Math.round(Math.random() * 4 + 1))
                        setvida(vida + (25))
                    }

                }
            }
        }
    }

    return (
        <>
            <div className="align">
                <h1>Teste</h1><br /><br />
                <button onClick={ataque}>Investida (Força: 1 x D5 [90%])</button>
                <button onClick={cura}>Cura (Efeito: +25HP [95%])</button><br /> <br />

                <a>HP: {vida}</a> <br /> <br />
                <a>(-_-)</a><br /><br /> <br />

                <a>HP: {vida2}</a><br />
                <a>FOR: (1 x D10)</a><br /> <br />
                <a>Precisão: [80%]</a> <br /> <br />
                <a>()_()</a><br />
            </div>
        </>
    )
}