import styles from "./Information.module.css";
import PropTypes from "prop-types";

export const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className={styles.infoBlock}>
      {isDraw === false && isGameEnded === false && (
        <h1>Player {currentPlayer} is playing now</h1>
      )}
      {isDraw === false && isGameEnded === true && (
        <h1>Player {currentPlayer} wins</h1>
      )}
      {isDraw === true && <h1>Is Draw</h1>}
    </div>
  );
};

InformationLayout.propTypes = {
  currentPlayer: PropTypes.string,
  isDraw: PropTypes.bool,
  isGameEnded: PropTypes.bool,
};
