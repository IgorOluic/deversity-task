import { createSelector } from "reselect";
import { RootState } from "../store";
import { MarbleBox } from "./marblesTypes";

const selectMarblesSlice = (state: RootState) => state.marbles;

export const selectMarbleBoxIds = createSelector(
  [selectMarblesSlice],
  (marblesSlice) => marblesSlice.marbleBoxIds
);

export const selectMarbleBoxDataById = (boxId: MarbleBox["id"]) =>
  createSelector(
    [selectMarblesSlice],
    (marblesSlice) => marblesSlice.marbleBoxData[boxId]
  );

export const selectTotalMarbleBoxCount = createSelector(
  [selectMarblesSlice],
  (marblesSlice) => marblesSlice.totalMarbleBoxCount
);

export const selectTotalMarblesCount = createSelector(
  [selectMarblesSlice],
  (marblesSlice) => marblesSlice.totalMarblesCount
);
