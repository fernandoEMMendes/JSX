import React, { useRef, useState } from "react"



function App() {

  //Cont = Contador
  const [Frases, setFrases] = useState("I can't see anything.")
  const [OnHand, setOnHand] = useState("None")
  const [ContGraveto, setContGraveto] = useState(0)


  const [Torch, setTorch] = useState(false)
  const [verificarTorch, setVerificarTorch] = useState(false)


  function Coletar() {
    if (ContGraveto >= 5) { setContGraveto(ContGraveto + 0) }
    else setContGraveto(ContGraveto + 1)

    if (ContGraveto >= 5) { setFrases("It's too heavy, I can't carry anymore") }
  }

  function CraftTorch() {
    if (verificarTorch(true)) {
      alert("I don't need another one.")
      return
    }

    if (ContGraveto < 5) { alert("Not enough resources") }
    else { setContGraveto(ContGraveto - 5) || setTorch(true) || setVerificarTorch(true) }
  }

  //-----------------------------------------------------------  
  //if (setTorch(true)) { document.body.style.backgroundColor = "darkorange" }  
  //else {document.body.style.backgroundColor = "white"} 
  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (

    <div>
      <h1>{Torch}</h1>
      <h3>{Frases}</h3> <br />
      <p>Equip: {OnHand}</p> <br /> <br />

      <h2>{ContGraveto}</h2>
      <button onClick={Coletar}>Gather sticks</button> <br /> <br />

      <button onClick={CraftTorch}>Torch (5 Sticks)</button>

    </div>
  );
}

export default App;
