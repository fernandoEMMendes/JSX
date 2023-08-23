import { useState } from "react"
import "./CadastroProdutos.css"




export default function CadastroProdutos() {


    function alert(e) {
        e.preventDefault()
    }

    return(
        <div className="align">
            <h1>CadastroProdutos</h1>

            <form>
                <label>Cadatrar Produto</label> <br /> <br />
                <input type="" placeholder="?" />  <br />
                <input type="" placeholder="?" />  <br />
                <input type="" placeholder="?" />  <br />
                <input type="" placeholder="?" />  <br />

                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}