import React, { Component } from "react"
import Botao from "./botao"
class Contador extends Component {
    render() {
        return (
            <div>
                <h2> Contador Positivo </h2>
                <Botao name="aumentar" />
                <h1> 0 </h1>
                <Botao name="diminuir" />
            </div>
        )
    }
}

export default Contador