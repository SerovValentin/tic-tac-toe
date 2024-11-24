import { Field } from "./components/Field/Field";
import { Information } from "./components/Information/Information";
import PropTypes from "prop-types";

export const AppLayout = ({
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  isDraw,
  setIsDraw,
  field,
  setField,
}) => {
  const resetHandler = () => {
    let isReset = confirm("Are you sure?");
    if (isReset) {
      setCurrentPlayer("X");
      setIsGameEnded(false);
      setIsDraw(false);
      setField(["", "", "", "", "", "", "", "", ""]);
    }
  };

  return (
    <div>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field
        currentPlayer={currentPlayer}
        setCurrentPlayer={setCurrentPlayer}
        isGameEnded={isGameEnded}
        setIsGameEnded={setIsGameEnded}
        isDraw={isDraw}
        setIsDraw={setIsDraw}
        field={field}
        setField={setField}
      />
      <button className="resetBtn" onClick={resetHandler}>
        Reset Game
      </button>
    </div>
  );
};

AppLayout.propTypes = {
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  isDraw: PropTypes.bool,
  setIsDraw: PropTypes.func,
  field: PropTypes.array,
  setField: PropTypes.func,
};
