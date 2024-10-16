import { selectMarbleBoxDataById } from "../../../redux/marbles/marblesSelectors";
import {
  decrementMarbleCount,
  deleteBox,
  incrementMarbleCount,
} from "../../../redux/marbles/marblesSlice";
import { MarbleBox } from "../../../redux/marbles/marblesTypes";
import { useAppDispatch, useAppSelector } from "../../../redux/store";
import HoldButton from "../../HoldButton";
import styles from "./MarbleBoxItem.module.css";

interface MarbleBoxItemProps {
  boxId: MarbleBox["id"];
}

const MarbleBoxItem = ({ boxId }: MarbleBoxItemProps) => {
  const dispatch = useAppDispatch();
  const boxData = useAppSelector(selectMarbleBoxDataById(boxId));

  const handleIncrement = () => {
    dispatch(incrementMarbleCount({ boxId }));
  };

  const handleDecrement = () => {
    dispatch(decrementMarbleCount({ boxId }));
  };

  const handleDeleteBox = () => {
    dispatch(deleteBox({ boxId }));
  };

  return (
    <div className={styles["marble-box-item-wrapper"]}>
      <div className={styles["buttons-and-count-wrapper"]}>
        <HoldButton
          onClick={handleDecrement}
          onHold={handleDecrement}
          holdTimeoutInMS={500}
          holdIntervalInMS={100}
          stopCondition={boxData.count < 1}
          disabled={boxData.count < 1}
        >
          -
        </HoldButton>

        <p>{boxData.count}</p>

        <HoldButton
          onClick={handleIncrement}
          onHold={handleIncrement}
          holdTimeoutInMS={500}
          holdIntervalInMS={100}
        >
          +
        </HoldButton>
      </div>

      <button className={styles["delete-button"]} onClick={handleDeleteBox}>
        Delete
      </button>
    </div>
  );
};

export default MarbleBoxItem;
