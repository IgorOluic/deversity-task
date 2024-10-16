import { MarbleBox } from "../../types";
import MarbleBoxItem from "../MarbleBoxItem";
import styles from "./MarbleBoxList.module.css";

interface MarbleBoxListProps {
  boxes: MarbleBox[];
  handleRemoveBox: (id: number) => void;
  incrementMarbleCount: (id: number) => void;
  decrementMarbleCount: (id: number) => void;
}

const MarbleBoxList = ({
  boxes,
  handleRemoveBox,
  incrementMarbleCount,
  decrementMarbleCount,
}: MarbleBoxListProps) => {
  const renderMarbleBoxListItem = (item: MarbleBox, index: number) => {
    return (
      <MarbleBoxItem
        key={index}
        count={item.count}
        id={item.id}
        handleRemoveBox={handleRemoveBox}
        incrementMarbleCount={incrementMarbleCount}
        decrementMarbleCount={decrementMarbleCount}
      />
    );
  };

  return (
    <div className={styles["marble-box-list"]}>
      {boxes.map(renderMarbleBoxListItem)}
    </div>
  );
};

export default MarbleBoxList;
