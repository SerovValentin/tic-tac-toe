import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
  field,
  setField,
}) => {
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
    <>
      {field.map((el, index) => {
        return (
          <button
            className={styles.cell}
            key={Date.now() + Math.random()}
            onClick={() => markingHandler(index)}
          >
            {el}
          </button>
        );
      })}
    </>
  );
};

FieldLayout.propTypes = {
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
  field: PropTypes.array,
  setField: PropTypes.func,
};
