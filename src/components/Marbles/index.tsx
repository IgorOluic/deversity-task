import {
  selectTotalMarbleBoxCount,
  selectTotalMarblesCount,
} from "../../redux/marbles/marblesSelectors";
import { addNewBox, deleteAllBoxes } from "../../redux/marbles/marblesSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import MarbleBoxList from "./MarbleBoxList";
import styles from "./Marbles.module.css";

const Marbles = () => {
  const dispatch = useAppDispatch();

  const handleAddNewBox = () => {
    dispatch(addNewBox());
  };

  return (
    <div className={styles["marbles-wrapper"]}>
      <TotalBoxesCount />
      <TotalMarblesCount />

      <div className={styles["add-box-wrapper"]}>
        <button className={styles["box-button"]} onClick={handleAddNewBox}>
          Add new box
        </button>
      </div>

      <MarbleBoxList />

      <DeleteAllBoxes />
    </div>
  );
};

const TotalBoxesCount = () => {
  const count = useAppSelector(selectTotalMarbleBoxCount);
  return <p>Boxes count: {count}</p>;
};

const TotalMarblesCount = () => {
  const count = useAppSelector(selectTotalMarblesCount);

  return <p>Marbles count: {count}</p>;
};

const DeleteAllBoxes = () => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(selectTotalMarbleBoxCount);

  const handleAddNewBox = () => {
    dispatch(deleteAllBoxes());
  };

  if (count === 0) {
    return null;
  }

  return (
    <div className={styles["delete-all-boxes-wrapper"]}>
      <button className={styles["box-button"]} onClick={handleAddNewBox}>
        Delete all boxes
      </button>
    </div>
  );
};

export default Marbles;
