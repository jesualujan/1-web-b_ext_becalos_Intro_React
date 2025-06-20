import { useState } from "react";
import GuessThePokemon from "./components/GuessThePokemon/GuessThePokemon";
import "./App.css";
function App() {
  const [showGame, setShowGame] = useState(false);
  return (
    <>
      <div className="text-center mt-4">
        <button
          className="btn btn-danger mb3"
          onClick={() => setShowGame(!showGame)}
        >
          {showGame ? "Ocultar juego" : "Mostrar juego"}
        </button>
        {showGame && <GuessThePokemon />}
      </div>
    </>
  );
}

export default App;
