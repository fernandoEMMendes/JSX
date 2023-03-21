import Botao from "./componentes/botao/botao.js"
import react, { Component } from "react"


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      Nome: "",
      Email: "",
      Senha: ""
    }

    cadastrar(){
      alert("hello")
    }
  }
}

render() {
  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={this.cadastrar}>
        <label>Nome:</label>
        <input type="text" /> <br /> <br />
        <label>Email:</label>
        <input type="text" /> <br /> <br />
        <label>Senha:</label>
        <input type="password" /> <br /> <br />
        <button type="submit"> cadastrar </button>
      </form>
    </div>
  )
}





export default App;
