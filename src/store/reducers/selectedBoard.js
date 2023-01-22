import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const initialState = {};

const selectedBoard = createSlice({
  name: "selectedBoard",
  initialState,
  reducers: {
    selectBoard(state, { type, payload }) {
      return {
        ...payload,
      };
    },
    clearSelectedBoard(state, { type, payload }) {
      return {};
    },
  },
});

export const { selectBoard, clearSelectedBoard } = selectedBoard.actions;
export const useSelectedBoardSelector = () =>
  useSelector((state) => state.selectedBoard);

export default selectedBoard.reducer;
