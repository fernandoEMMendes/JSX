import { useState } from "react"

import "./RPGTeste.css"

export default function Home() {

    const [vida, setvida] = useState(100)
    const [vida2, setvida2] = useState(100)
    const [pers, setpers] = useState(" o (o_-) o|)->")






    function ataque() {

        if (vida2 <= 0) {
            alert("Venceu!")
            return
        } else {
            if (vida <= 0) {
                alert("Perdeu!")
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

                if (vida >= 100) {
                    alert("Ao pegar a poção em suas mãos seu estômago se revolta contra si mesmo, o líquido vermelho parece ainda mais toxico que o normal e você em uma ação involuntária a guarda em sua mochila novamente")
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
                            if (vida >= 100) {
                                setvida(100)
                            }
                        }
                    }
                }
            }
        }
    }





    function funny() {
        setpers("( ▀ ͜͞ʖ▀) /̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿")
        setvida2(vida2 - 100)
    }







    return (
        <>
            <div>
                <div className="habilidades">
                    <h1>Teste</h1><br /><br />
                    <button onClick={ataque}>Arco (Força: 1 x D5 [90%])</button>
                    <button onClick={cura}>Cura (Efeito: +25HP [95%])</button><br /> <br />
                    <button onClick={funny}>9mm</button>
                </div>
            </div>

            <div className="container personagem">
                <div className="row">
                    <div className="col">
                        <a>HP: {vida}</a> <br />
                        <a>???: ???</a> <br />
                        <a>???: ???</a> <br /> <br />
                        <a>{pers}</a>
                    </div>

                    <div className="col">
                        <a>HP: {vida2}</a>  <br />
                        <a>FOR: (1 x D10)</a>   <br />
                        <a>Precisão: [80%]</a>  <br /> <br />
                        <a>{"<--o-o- (Ò_Ó)"}</a>  <br />
                    </div>
                </div>
            </div>
        </>
    )
}