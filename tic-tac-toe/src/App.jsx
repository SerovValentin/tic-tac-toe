import { AppLayout } from "./AppLayout";
import "./App.css";
import { useState } from "react";

function App() {
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  const [field, setField] = useState(["", "", "", "", "", "", "", "", ""]);

  const resetHandler = () => {
    let isReset = confirm("Are you sure?");
    if (isReset) {
      setCurrentPlayer("X");
      setIsGameEnded(false);
      setIsDraw(false);
      setField(["", "", "", "", "", "", "", "", ""]);
    }
  };

  const markingHandler = (index) => {
    if (isGameEnded) {
      return true;
    }
    const newField = [...field];
    if (newField[index] === "") {
      newField[index] = currentPlayer;
      setField(newField);
    } else {
      return alert(`Player ${currentPlayer} choose another cell`);
    }
    winContest(newField);
  };

  const winContest = (newField) => {
    const WIN_PATTERNS = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let arr = [];
    for (let i = 0; i < newField.length; i++) {
      if (newField[i] === currentPlayer) {
        arr.push(i);
      }
    }
    let win = false;
    WIN_PATTERNS.forEach((array) => {
      if (array.every((value) => arr.includes(value))) {
        win = true;
      }
    });
    if (win) {
      setIsGameEnded(true);
      return;
    }
    if (win === false && newField.every((value) => value !== "")) {
      setIsDraw(true);
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "0" : "X");
    }
  };

  return (
    <div className="gameContainer">
      <AppLayout
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
        field={field}
        markingHandler={markingHandler}
        resetHandler={resetHandler}
      />
    </div>
  );
}

export default App;
