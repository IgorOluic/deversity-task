import HoldButton from "../HoldButton";
import styles from "./MarbleBoxItem.module.css";

interface MarbleBoxItemProps {
  count: number;
  id: number;
  handleRemoveBox: (id: number) => void;
  incrementMarbleCount: (id: number) => void;
  decrementMarbleCount: (id: number) => void;
}

const MarbleBoxItem = ({
  count,
  id,
  handleRemoveBox,
  incrementMarbleCount,
  decrementMarbleCount,
}: MarbleBoxItemProps) => {
  const onDeleteClick = () => {
    handleRemoveBox(id);
  };

  const handleIncrement = () => {
    incrementMarbleCount(id);
  };

  const handleDecrement = () => {
    decrementMarbleCount(id);
  };

  return (
    <div className={styles["marble-box-item-wrapper"]}>
      <div className={styles["buttons-and-count-wrapper"]}>
        <HoldButton
          onClick={handleDecrement}
          onHold={handleDecrement}
          holdTimeoutInMS={500}
          holdIntervalInMS={100}
          stopCondition={count < 1}
          disabled={count < 1}
        >
          -
        </HoldButton>

        <p>{count}</p>

        <HoldButton
          onClick={handleIncrement}
          onHold={handleIncrement}
          holdTimeoutInMS={500}
          holdIntervalInMS={100}
        >
          +
        </HoldButton>
      </div>

      <button className={styles["delete-button"]} onClick={onDeleteClick}>
        Delete
      </button>
    </div>
  );
};

export default MarbleBoxItem;
