import React, { useState } from "react"
function App() {

  const [Nome, SetNome] = useState("")
  const [Senha, SetSenha] = useState("")
  const [Email, SetEmail] = useState("")
  const [Sexo, SetSexo] = useState("")
  const [Pref, SetPref] = useState("")

  const [Numero, SetNumero] = useState(0)

  function Cadastro() {
    if (Nome === '' || Email === '' || Senha === '' || Sexo === '' || Pref === '') {
      alert('Preencha todos os Campos')
    }
    else
      alert(`Nome: ${Nome} \nSenha: ${Senha} \nEmail: ${Email} \nSexo: ${Sexo} \n Preferencia: ${Pref} `)
  }

  function aumentar() {
    if
      (Numero === 5) { SetNumero(Numero - 0) }
    else
      SetNumero(Numero + 1)
  }

  function diminuir() {
    if
      (Numero === 0) { SetNumero(Numero - 0) }
    else
      SetNumero(Numero - 1)
  }


  return (
    <>
      <div>
        <h1>Formulario</h1>
        <form onSubmit={Cadastro}>
          <label>Nome:</label>
          <input type="text"
            value={Nome}
            onChange={(e) => SetNome(e.target.value)} /> <br /> <br />


          <label>Senha:</label>
          <input type="password"
            value={Senha}
            onChange={(e) => SetSenha(e.target.value)} /> <br /> <br />


          <label>Email:</label>
          <input type="email"
            value={Email}
            onChange={(e) => SetEmail(e.target.value)} /> <br /> <br />


          <label>Sexo:  </label>
          <select value={Sexo}
            onChange={(e) => SetSexo(e.target.value)}>

            <option value="">Selecione um</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select> <br /> <br />


          <div value={Pref} onChange={(e) => SetPref(e.target.value)}>
            <label>Preferencia</label> <br />
            <input type="radio" name="escolha" value="Filmes" />Filmes<br />
            <input type="radio" name="escolha" value="Series" />Series <br />
          </div>

          <button type="submit">Enviar</button>
        </form>
      </div>



      <div>
        <h1>Contador</h1>

        <button onClick={aumentar}>Mais</button> <br />
        <h1>{Numero}</h1>
        <button onClick={diminuir}>Menos</button> <br />

      </div>
    </>
  );
}

export default App;
