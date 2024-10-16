import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MarbleBox, MarblesState } from "./marblesTypes";

const initialState: MarblesState = {
  marbleBoxIds: [],
  marbleBoxData: {},
  totalMarbleBoxCount: 0,
  totalMarblesCount: 0,
};

const marblesSlice = createSlice({
  name: "marbles",
  initialState,
  reducers: {
    addNewBox: (state) => {
      const isFirstItem = state.marbleBoxIds.length === 0;

      const newBoxId = isFirstItem
        ? 1
        : state.marbleBoxData[state.marbleBoxIds[state.marbleBoxIds.length - 1]]
            .id + 1;

      const newBox = {
        id: newBoxId,
        count: 0,
      };

      state.marbleBoxData[newBoxId] = newBox;
      state.marbleBoxIds = [...state.marbleBoxIds, newBoxId];
      state.totalMarbleBoxCount += 1;
    },
    deleteBox: (state, action: PayloadAction<{ boxId: MarbleBox["id"] }>) => {
      const { boxId } = action.payload;

      const indexToRemove = state.marbleBoxIds.findIndex((id) => id === boxId);

      if (indexToRemove !== -1) {
        const boxCount = state.marbleBoxData[boxId].count || 0;

        delete state.marbleBoxData[boxId];

        state.marbleBoxIds.splice(indexToRemove, 1);
        state.totalMarbleBoxCount -= 1;

        state.totalMarblesCount -= boxCount;
      }
    },
    incrementMarbleCount: (
      state,
      action: PayloadAction<{ boxId: MarbleBox["id"] }>
    ) => {
      state.marbleBoxData[action.payload.boxId].count += 1;
      state.totalMarblesCount += 1;
    },
    decrementMarbleCount: (
      state,
      action: PayloadAction<{ boxId: MarbleBox["id"] }>
    ) => {
      state.marbleBoxData[action.payload.boxId].count -= 1;
      state.totalMarblesCount -= 1;
    },
    deleteAllBoxes: (state) => {
      state.marbleBoxData = {};
      state.marbleBoxIds = [];
      state.totalMarbleBoxCount = 0;
      state.totalMarblesCount = 0;
    },
  },
});

export const {
  addNewBox,
  deleteBox,
  incrementMarbleCount,
  decrementMarbleCount,
  deleteAllBoxes,
} = marblesSlice.actions;

export default marblesSlice.reducer;
