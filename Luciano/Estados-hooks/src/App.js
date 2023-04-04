import React, { useState } from "react"
function App() {
  const [Nome, SetNome] = useState("")
  const [Senha, SetSenha] = useState("")

  function cadastro() {
    alert(`Nome: ${Nome} \nSenha: ${Senha}  `)
  }


  return (
    <div>
      <h1>Estados Hooks</h1>
      <form onSubmit={cadastro}>
        <label>Nome:</label>
        <input type="texto"
          value={Nome}
          onChange={(e) => SetNome(e.target.value)} />
        <br />
        <label> Senha:</label>
        <input type="password"
          value={Senha}
          onChange={(e) => SetSenha(e.target.value)} />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
