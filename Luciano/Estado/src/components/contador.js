import React, { Component } from "react"
import botao from "./botao"

class Contador extends Component {
    render() {
        return (
            <div>
                <h2> Contador </h2>
                <botao />
                <h2> 0 </h2> <br />
                
                
            </div>
        )
    }
}
export default Contador