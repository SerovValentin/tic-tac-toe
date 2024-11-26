import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const FieldLayout = ({ field, markingHandler }) => {
  return (
    <>
      {field.map((el, index) => {
        return (
          <button
            className={styles.cell}
            key={index}
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
  field: PropTypes.array,
  markingHandler: PropTypes.func,
};
