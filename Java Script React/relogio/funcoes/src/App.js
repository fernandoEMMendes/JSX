function App() {
  function clicar(){
    var x = 42
    var y = 32
    var z = x + y 
  }
  
  return (
  <div>
    <h1> funções </h1>

    <button onClick={clicar}>Somar</button>
    <p> o resultado é: </p>

  </div>
  );
}

export default App;
