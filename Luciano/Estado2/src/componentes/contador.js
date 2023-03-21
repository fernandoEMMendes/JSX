import React, { Component } from "react"
import Botao from "./botao"
class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            horas: "00;00;00",
        }

        this.diminuir = this.diminuir.bind(this)
        this.aumentar = this.aumentar.bind(this)
        this.dobro = this.dobro.bind(this)
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({ horas: new Date().toLocaleTimeString() })
        }, 1000)
    }

    diminuir() {
        var state = this.state
        state.contador -= 1
        this.setState(state)
    }

    aumentar() {
        var state = this.state
        state.contador += 1
        this.setState(state)
        if (this.state.contador >= 5) {
            state.contador -= 1
            return
            alert("limite!")
        }
    }


    dobro() {
        var state = this.state
        state.contador *=
            this.seetState(state)
    }

    render() {
        return (
            <div>
                <h2> Horario: {this.state.horas} </h2>
                <h2> Contador Positivo </h2>
                <Botao name="aumentar" acaoBtn={this.aumentar} />
                <h1> {this.state.contador} </h1>
                <Botao name="diminuir" acaoBtn={this.diminuir} />
                <Botao name="dobrar" />
            </div>
        )
    }
}

export default Contador