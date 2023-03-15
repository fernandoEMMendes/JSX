import React, { Component } from "react"
import Botao from "./botao"

class Contador extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            contador: 0,
            zero: "contador chegou a zero"
        }
    }
    diminuir(){
        alert("clicou")
    }
    
    render() {
        return (
            <div>
                <h2> Contador </h2>
                <Botao nome="aumentar"/>
                <h2>{this.state.contador}</h2><br />
                <Botao nome="diminuir"/>
             </div>
        )
    }
}
export default Contador