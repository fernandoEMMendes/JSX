import React, { Component } from "react"
import "../css/cadastro.css"


class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            masculino: 'masculino',
            feminino: 'feminino',
            filmes: 'filmes',
            series: 'series',
        }
    }

    render() {
        return (
            <div class="caixa">
                <h1> Contato </h1>
                <form onSubmit={this.cadastrar}>
                    <label>Nome:</label>
                    <input
                        type="text"
                        value={this.state.nome}
                        onChange={(e) => this.setState({ nome: e.target.value })}
                    /> <br />
                    <label>E-mail:</label>
                    <input
                        type="email"
                        value={this.state.email}
                        onChange={(e) => this.setState({ email: e.target.value })}
                    /> <br />
                    <span>Sexo:</span>
                    <select>
                        <option value={this.state.masculino}>Masculino</option>
                        <option value={this.state.feminino}>Feminino</option>
                    </select> <br />
                    <span>Preferencia:</span> <br/>
                    <input type="radio" value={this.state.filmes} /> Filmes <br />
                    <input type="radio" value={this.state.series} /> Séries <br />
                    

                    <button type='submit'>Enviar</button>
                </form>
            </div >
        )
    }

}


export default Cadastro