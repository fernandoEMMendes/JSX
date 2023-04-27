import { useState } from "react"

function Produtos() {




    return (
        <div>
            <table>
                <button onClick={function () { disponibilidade(); disponibilidade2(); disponibilidade3(); }}>Verificar disponibilidade</button>
                <tr>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Estoque</th>
                </tr>

                <tr>
                    <td>Camisetas</td>
                    <td>Adidas</td>
                    <td>Disponível</td>
                </tr>
                <tr>
                    <td>Calças</td>
                    <td>Nike</td>
                    <td>Indisponível</td>
                </tr>
                <tr>
                    <td>Calçados</td>
                    <td>Mizuno</td>
                    <td>disponivel</td>
                </tr>
                <tr>
                    <td>Bonés</td>
                    <td>Oakley</td>
                    <td>Disponível</td>
                </tr>

            </table>
        </div >
    )

}

export default Produtos

//Descobrir razão pela qual o random trava após alguns usos

//const [valor, setvalor] = useState("")
//const [valor2, setvalor2] = useState("")
//const [valor3, setvalor3] = useState("")

//function random(min, max) {
//    return function () {
//        return Math.floor(Math.random() * (1 + max - min)) + min;
//    }
//}

//function random2(min, max) {
//    return function () {
//        return Math.floor(Math.random() * (1 + max - min)) + min;
//    }
//}

//function random3(min, max) {
//    return function () {
//        return Math.floor(Math.random() * (1 + max - min)) + min;
//    }
//}




//var aleatorio = random(1, 2)
//var resultado = ""
//for (var i = 0; i < 1; i++) {
//    resultado += aleatorio() + "";
//}

//var aleatorio2 = random2(1, 2)
//var resultado2 = ""
//for (var i = 0; i < 1; i++) {
//    resultado2 += aleatorio2() + "";
//}

//var aleatorio3 = random3(1, 2)
//var resultado3 = ""
//for (var i = 0; i < 1; i++) {
//    resultado3 += aleatorio3() + "";
//}



//function disponibilidade() {
//    if (resultado >= 2) {
//        setvalor("Disponível")
//    } else {
//        setvalor("Indisponível")
//    }
//}

//function disponibilidade2() {
//    if (resultado >= 2) {
//        setvalor2("Disponível")
//    } else {
//        setvalor2("Indisponível")
//    }
//}

//function disponibilidade3() {
//    if (resultado >= 2) {
//        setvalor3("Disponível")
//    } else {
//        setvalor3("Indisponível")
//    }
//}
