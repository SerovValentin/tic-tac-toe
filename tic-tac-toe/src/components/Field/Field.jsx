import { FieldLayout } from "./FieldLayout";
import styles from "./Field.module.css";
import PropTypes from "prop-types";

export const Field = ({ field, markingHandler }) => {
  return (
    <div className={styles.field}>
      {<FieldLayout field={field} markingHandler={markingHandler} />}
    </div>
  );
};

Field.propTypes = {
  field: PropTypes.array,
  markingHandler: PropTypes.func,
};
