import React, { useState } from "react"
function App() {
  //Cont = Contador
  const [frases, setfrases] = useState("")
  const [emmaos, setemmaos] = useState("")
  const [ContGraveto, SetContGraveto] = useState(0)



  function Frases() {
    if (ContGraveto >= 5) { setfrases("I can't see anything.") }
    else setfrases("I can't hold anymore")
  }

  function Coletar() {
    if (ContGraveto >= 5) { SetContGraveto(ContGraveto + 0) }
    else SetContGraveto(ContGraveto + 1)
  }

  //-----------------------------------------------------------
  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (

    <div>
      <h3>{Frases}</h3> <br />
      <p>Equip:{emmaos}</p> <br /> <br />

      <h3>{ContGraveto}</h3>
      <button onClick={Coletar}>Gather sticks</button> <br />


    </div>
  );
}

export default App;
