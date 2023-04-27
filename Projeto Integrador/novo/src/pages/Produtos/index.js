import { useState } from "react"

function Produtos() {

    const [valor, setvalor] = useState("");

    function random(min, max) {
        return (Math.floor(1, 4) * (max - min)) + min;
    }

    if (random = 2) {
        setvalor("Disponível")
        return
    } else {
        setvalor("Indisponível")
        return
    }


    return (
        <div>
            <h3>Produto 1</h3>
            <a>{valor}</a>
        </div>
    )

}

export default Produtos

