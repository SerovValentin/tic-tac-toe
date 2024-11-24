import { FieldLayout } from "./FieldLayout";
import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const Field = ({
  currentPlayer,
  setCurrentPlayer,
  isGameEnded,
  setIsGameEnded,
  setIsDraw,
  field,
  setField,
}) => {
  return (
    <div className={styles.field}>
      {
        <FieldLayout
          currentPlayer={currentPlayer}
          setCurrentPlayer={setCurrentPlayer}
          isGameEnded={isGameEnded}
          setIsGameEnded={setIsGameEnded}
          setIsDraw={setIsDraw}
          field={field}
          setField={setField}
        />
      }
    </div>
  );
};

Field.propTypes = {
  currentPlayer: PropTypes.string,
  setCurrentPlayer: PropTypes.func,
  isGameEnded: PropTypes.bool,
  setIsGameEnded: PropTypes.func,
  setIsDraw: PropTypes.func,
  field: PropTypes.array,
  setField: PropTypes.func,
};
