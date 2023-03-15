import Contador from "./components/contador";
import "./style.app.css"

function App() {
  return (
    <div className="container">
      <h1> Bom Dia.</h1>
      <p>Como está seu dia até agora?</p>
      <div>
        <Contador />
      </div>
    </div>

  );
}

export default App;
