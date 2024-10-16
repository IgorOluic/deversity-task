import { useMemo, useState } from "react";
import MarbleBoxList from "../MarbleBoxList";
import { MarbleBox } from "../../types";
import styles from "./MarblesWithLocalState.module.css";

const MarblesWithLocalState = () => {
  const [boxes, setBoxes] = useState<MarbleBox[]>([]);

  const marblesCount = useMemo(() => {
    let totalMarblesCount = 0;

    boxes.forEach((box) => {
      totalMarblesCount += box.count;
    });

    return totalMarblesCount;
  }, [boxes]);

  const handleAddNewBox = () => {
    const boxListHasItems = boxes.length > 0;
    const newBoxId = boxListHasItems ? boxes[boxes.length - 1].id + 1 : 1;
    const newBox = {
      id: newBoxId,
      count: 0,
    };

    setBoxes((prevBoxes) => [...prevBoxes, newBox]);
  };

  const handleRemoveBox = (id: number) => {
    setBoxes((prevBoxes) => prevBoxes.filter((box) => box.id !== id));
  };

  const incrementMarbleCount = (id: number) => {
    setBoxes((prevBoxes) => {
      const index = prevBoxes.findIndex((box) => box.id === id);

      const updatedBoxes = [...prevBoxes];

      updatedBoxes[index] = {
        ...updatedBoxes[index],
        count: updatedBoxes[index].count + 1,
      };

      return updatedBoxes;
    });
  };

  const decrementMarbleCount = (id: number) => {
    setBoxes((prevBoxes) => {
      const index = prevBoxes.findIndex((box) => box.id === id);

      const updatedBoxes = [...prevBoxes];

      updatedBoxes[index] = {
        ...updatedBoxes[index],
        count: updatedBoxes[index].count - 1,
      };

      return updatedBoxes;
    });
  };

  return (
    <div className={styles["marbles-wrapper"]}>
      <p>Boxes count: {boxes.length}</p>
      <p>Marbles count: {marblesCount}</p>

      <div className={styles["add-box-wrapper"]}>
        <button className={styles["add-box-button"]} onClick={handleAddNewBox}>
          Add new box
        </button>
      </div>

      <MarbleBoxList
        boxes={boxes}
        handleRemoveBox={handleRemoveBox}
        incrementMarbleCount={incrementMarbleCount}
        decrementMarbleCount={decrementMarbleCount}
      />
    </div>
  );
};

export default MarblesWithLocalState;
