import React, { Component } from "react"
import Botao from "./botao"

class Contador extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            zero: 'Contador chegou a zero'
        }
        this.aumentar = this.aumentar.bind(this)
        this.diminuir = this.diminuir.bind(this)
    }

    diminuir(){
        var state = this.state
        if(this.state.contador === 0){
            return
        }
        state.contador -= 1
        this.setState(state)
    }
    aumentar(){
       var state = this.state
       state.contador +=4
       this.setState(state)
    }
    
    render(){
        return (
            <div>
                <h2> Contador </h2>
                <Botao name="aumentar"acaoBtn={this.aumentar} />
                <h2>{this.state.contador}</h2><br />
                <Botao name="diminuir" acaoBtn={this.diminuir} />
             </div>
        )
    }
}

export default Contador