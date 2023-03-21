import Botao from "./componentes/botao/botao.js"
import react, { Component } from "react"


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      nome: "",
      email: "",
      senha: ""
    }
    this.cadastrar = this.cadastrar.bind(this)
  }


  cadastrar(event) {
    const { nome, email, senha } = this.state
    alert(`Nome: ${nome} \nEmail: ${email} \nSenha ${senha}`)
    event.preventDefault()
  }




  render() {
    return (
      <div>
        <h1>Formulario</h1>
        <form onSubmit={this.cadastrar}>
          <label>Nome:</label>
          <input
            type="text" value={this.state.nome} onChange={(e) => this.setState({ nome: e.target.value })} /> <br /> <br />
          <label>Email:</label>
          <input type="text" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} /> <br /> <br />
          <label>Senha:</label>
          <input type="password" value={this.state.senha} onChange={(e) => this.setState({ senha: e.target.value })} /> <br /> <br />
          <button type="submit"> cadastrar </button>
        </form>
      </div>
    )
  }

}





export default App;
