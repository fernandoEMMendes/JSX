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

    cadastrar(event) {
        event.preventDefault()
        const { nome, email, senha, sexo, preferencia } = this.state
        if (nome === '' || email === '' || senha === '' || sexo === '' || preferencia === '') {
            alert('Preencha todos os Campos')
            return
        }
        alert(`Nome: ${nome} \nE-mail: ${email} \nSenha: ${senha} \nSexo: ${sexo} \nPreferencia: ${preferencia}`)
        this.setState({
            nome: '',
            email: '',
            senha: '',
            sexo: '',
            preferencia: ''
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
                        /> <br /> <br />
                        <label>E-mail:</label>
                        <input
                            type="email"
                            value={this.state.email}
                            onChange={(e) => this.setState({ email: e.target.value })}
                        /> <br /> <br />
                        <label>Senha:</label>
                    <input
                        type='password'
                        value={this.state.senha}
                        onChange={(e) => this.setState({ senha: e.target.value })}
                    /><br /> <br />
                        <span>Sexo:</span>
                        <select
                            value={this.state.sexo}
                            onChange={(e) => this.setState({ sexo: e.target.value })}>
                            <option value=''></option>
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