import { selectMarbleBoxIds } from "../../../redux/marbles/marblesSelectors";
import { MarbleBox } from "../../../redux/marbles/marblesTypes";
import { useAppSelector } from "../../../redux/store";
import MarbleBoxItem from "../MarbleBoxItem";
import styles from "./MarbleBoxList.module.css";

const MarbleBoxList = () => {
  const marbleBoxIds = useAppSelector(selectMarbleBoxIds);

  const renderMarbleBoxListItem = (
    marbleBoxId: MarbleBox["id"],
    index: number
  ) => {
    return <MarbleBoxItem key={index} boxId={marbleBoxId} />;
  };

  return (
    <div className={styles["marble-box-list"]}>
      {marbleBoxIds.map(renderMarbleBoxListItem)}
    </div>
  );
};

export default MarbleBoxList;
