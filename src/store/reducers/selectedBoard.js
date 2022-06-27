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
  },
});

export const { selectBoard } = selectedBoard.actions;
export const useSelectedBoardSelector = () =>
  useSelector((state) => state.selectedBoard);

export default selectedBoard.reducer;
