import { useState } from "react"
import "../../components/css/produtos.css"

function Produtos() {

    const [valor, setvalor] = useState("")
    const [valor2, setvalor2] = useState("")
    const [valor3, setvalor3] = useState("")
    const [valor4, setvalor4] = useState("")

    function random(min, max) {
        return function () {
            return Math.floor(Math.random() * (1 + max - min));
        }
    }

    function random2(min, max) {
        return function () {
            return Math.floor(Math.random() * (1 + max - min));
        }
    }

    function random3(min, max) {
        return function () {
            return Math.floor(Math.random() * (1 + max - min));
        }
    }

    function random4(min, max) {
        return function () {
            return Math.floor(Math.random() * (1 + max - min));
        }
    }



    var aleatorio = random(0, 10)
    var resultado = ""
    for (var i = 0; i < 1; i++) {
        resultado += aleatorio() + "";
    }

    var aleatorio2 = random2(0, 10)
    var resultado2 = ""
    for (var i = 0; i < 1; i++) {
        resultado2 += aleatorio2() + "";
    }

    var aleatorio3 = random3(0, 10)
    var resultado3 = ""
    for (var i = 0; i < 1; i++) {
        resultado3 += aleatorio3() + "";
    }

    var aleatorio4 = random4(0, 10)
    var resultado4 = ""
    for (var i = 0; i < 1; i++) {
        resultado4 += aleatorio4() + "";
    }


    function disponibilidade() {
        if (resultado >= 5) {
            setvalor("Disponível")
        } else {
            setvalor("Indisponível")
        }
    }

    function disponibilidade2() {
        if (resultado2 >= 5) {
            setvalor2("Disponível")
        } else {
            setvalor2("Indisponível")
        }
    }

    function disponibilidade3() {
        if (resultado3 >= 5) {
            setvalor3("Disponível")
        } else {
            setvalor3("Indisponível")
        }
    }

    function disponibilidade4() {
        if (resultado4 >= 5) {
            setvalor4("Disponível")
        } else {
            setvalor4("Indisponível")
        }
    }



    return (
        <>
            <div>
                <button className="botao" onClick={function () { disponibilidade(); disponibilidade2(); disponibilidade3(); disponibilidade4(); }}>Verificar disponibilidade</button>
            </div>
            <div className="grid-container">
                <div className="legenda">
                    Produtos
                </div>
                <div className="legenda">
                    Marca
                </div>
                <div className="legenda">
                    Disponibilidade
                </div>

                <div>
                    Camisetas
                </div>
                <div>
                    Supreme
                </div>
                <div>
                    {valor}
                </div>

                <div>
                    Calças
                </div>
                <div>
                    Nike
                </div>
                <div>
                    {valor2}
                </div>

                <div>
                    Calçados
                </div>
                <div>
                    Mizuno
                </div>
                <div>
                    {valor3}
                </div>

                <div>
                    Acessórios
                </div>
                <div>
                    Oakley
                </div>
                <div>
                    {valor4}
                </div>
            </div >
        </>
    )

}

export default Produtos