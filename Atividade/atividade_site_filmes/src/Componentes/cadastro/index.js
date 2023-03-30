import React, { Component } from "react"
import "../css/cadastro.css"


class Cadastro extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nome: '',
            email: '',
            sexo: '',
            preferencia: "",

        }
        this.cadastrar = this.cadastrar.bind(this)
    }

    cadastrar(e) {
        e.preventDefault()
        const { nome, email, sexo, preferencia } = this.state
        if (nome === '' || email === '' || sexo === '' || preferencia === '') {
            alert("Por Favor, preencher campos em branco")
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSexo: ${sexo} \nPreferencia: ${preferencia}`)

        this.setState({
            nome: '',
            email: '',
            sexo: '',
            preferencia: '',
        })
    }

    render() {
        return (
            <div class="borda" >
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
                        <select
                            value={this.state.sexo}
                            onChange={(e) => this.setState({ sexo: e.target.value })}>

                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                        </select> <br />
                        <div value={this.state.preferencia}
                        onChange={(e) => this.setState({ preferencia: e.target.value})}>
                        <legend>Sua Preferencia:</legend> <br />
                        <input type="radio" name="programar está me deixando maluco" value="Filmes" /> Filmes <br />
                        <input type="radio" name="programar está me deixando maluco" value="Series" /> Séries <br />
                        </div>


                        <button type='submit'>Enviar</button>
                    </form>
                </div >
            </div>
        )
    }

}


export default Cadastro