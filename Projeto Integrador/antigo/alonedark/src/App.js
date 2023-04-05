import React, { useState } from "react"
function App() {
  //Cont = Contador
  const [frases, setfrases] = useState("")
  const [emmaos, setemmaos] = useState("")
  const [ContGraveto, SetContGraveto] = useState(0)
  


  function Frases() {
    if (ContGraveto === 0) {
      frases = ("Darkness... I can't see anything.")

    }
  }

  function Coletar() {
    SetContGraveto(ContGraveto + 1)
  }

  //-----------------------------------------------------------
  //-----------------------------------------------------------
  //-----------------------------------------------------------

  return (

    <div>
      <span>{frases}</span> <br />
      <p>Equip:  {emmaos}</p> <br /> <br />
      
      <h3>{ContGraveto}</h3>
      <button onClick={Coletar}>Gather sticks</button> <br />


    </div>
  );
}

export default App;
