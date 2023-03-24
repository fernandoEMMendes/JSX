import React, { Component } from "react"
import Botao from "./botao"
import Botaotocha from "./botaotocha"
class Contador extends Component {

    constructor(props) {
        super(props)
        this.state = {
            contador: 0,
            frase: "Darkness. . . I can't see anything.",
            emmaos: "Nothing",
            FazerTocha: 0,
        }

        this.diminuir = this.diminuir.bind(this)
        this.aumentar = this.aumentar.bind(this)
    }

    diminuir() {
        if (this.state.contador === 0) {
            var state = this.state
            state.contador -= 0
            this.setState(state)
        } else {
            var state = this.state
            state.contador -= 1
            this.setState(state)
        }
    }

    aumentar() {
        if (this.state.contador === 5) {
            var state = this.state
            state.contador += 0
            this.setState(state)
        } else {
            var state = this.state
            state.contador += 1
            this.setState(state)

            if (this.state.contador === 5) {
                var state = this.state
                state.frase = "I can't carry anymore..."
            }
        }
    }
   
    //FazerTocha imcompleto, preciso fazer o botão desaparecer quando não houver gravetos suficientes e aparecer quando ouver
    
    tocha() {

        if (this.state.contador <= 5) {
            var state = this.state

        }


        if (this.state.FazerTochar = 1) {
            var state = this.state
            state.emmaos = "Torch"
        }
    }

    FazerTocha(){
        if (this.state.contador >= 5) {

        }
    }

    //----------------------------------------------------------

    render() {
        return (
            <div>
                <p>{this.state.frase}</p>
                <p>Equip: {this.state.emmaos}</p>
                <Botao name="Gather sticks" acaoBtn={this.aumentar} /> <Botaotocha name="Light up a torch" acaoBtn={this.FazerTocha} />
                <h1> {this.state.contador} </h1>
            </div>
        )
    }
}

export default Contador