import { AppLayout } from "./AppLayout";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);
  return (
    <div className="gameContainer">
      <AppLayout
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
        field={field}
        setField={setField}
      />
    </div>
  );
}

export default App;
