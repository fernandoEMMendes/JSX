import React, { useState } from "react"
function App() {
  //Cont = Contador
  const [Frases, setFrases] = useState("I can't see anything.")
  const [OnHand, setOnHand] = useState("None")
  const [ContGraveto, setContGraveto] = useState(0)
  const [Torch, setTorch] = useState(0)


  function Coletar() {
    if (ContGraveto >= 5) { setContGraveto(ContGraveto + 0) }
    else setContGraveto(ContGraveto + 1)

    if (ContGraveto >= 5) { setFrases("It's too heavy, I can't carry anymore") }
  }

  function CraftTorch() {
    if (ContGraveto >= 5) { setContGraveto(ContGraveto - 5) & setOnHand(OnHand("Torch")) }
    if (OnHand("Torch")) { document.body.style.backgroundColor = "orange" }
  }

  //-----------------------------------------------------------
  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (

    <div>
      <h3>{Frases}</h3> <br />
      <p>Equip: {OnHand}</p> <br /> <br />

      <h2>{ContGraveto}</h2>
      <button onClick={Coletar}>Gather sticks</button> <br /> <br />

      <button onClick={CraftTorch}>Torch</button>

    </div>
  );
}

export default App;
