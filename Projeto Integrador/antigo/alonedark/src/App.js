import React, { useState } from "react"
function App() {
  //Cont = Contador
  const [frases, setfrases] = useState("")
  const [emmaos, setemmaos] = useState("")
  const [ContGraveto, SetContGraveto] = useState(0)
  


  function Frases() {
    if (ContGraveto >= 0) {
       setfrases("Darkness... I can't see anything.")

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
      <h3 value={frases}></h3> <br />
      <p>Equip:  {emmaos}</p> <br /> <br />
      
      <h3>{ContGraveto}</h3>
      <button onClick={Coletar}>Gather sticks</button> <br />


    </div>
  );
}

export default App;
