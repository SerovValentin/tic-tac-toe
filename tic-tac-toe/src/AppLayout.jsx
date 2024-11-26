import { Field } from "./components/Field/Field";
import { Information } from "./components/Information/Information";
import PropTypes from "prop-types";

export const AppLayout = ({
  currentPlayer,
  isGameEnded,
  isDraw,
  field,
  resetHandler,
  markingHandler,
}) => {
  return (
    <div>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field field={field} markingHandler={markingHandler} />
      <button className="resetBtn" onClick={resetHandler}>
        Reset Game
      </button>
    </div>
  );
};

AppLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isGameEnded: PropTypes.bool,
  isDraw: PropTypes.bool,
  field: PropTypes.array,
  markingHandler: PropTypes.func,
  resetHandler: PropTypes.func,
};
