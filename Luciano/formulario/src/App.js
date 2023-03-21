import Botao from "./componentes/botao"

function App() {
  return (
  <div>
    <h1>Formulario</h1>
      <form>
        <label>Nome:</label>
        <input type="text" /> <br /> <br />
        <label>Email:</label> 
        <input type="text" /> <br /> <br />
        <label>Senha:</label>
        <input type="text" /> <br /> <br />
        <Botao name="Finalizar"/>
      </form>
  </div>
  )
}

export default App;
