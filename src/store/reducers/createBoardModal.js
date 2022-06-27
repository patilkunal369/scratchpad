import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const initialState = {
  isCreateBoardModalOpen: false,
  modalType: "",
  editBoardValues: {},
};

const createBoardModal = createSlice({
  name: "createBoardModal",
  initialState,
  reducers: {
    openCreateBoardModal(state, { type, payload: { modalType, board = {} } }) {
      state.isCreateBoardModalOpen = true;
      state.modalType = modalType;
      state.editBoardValues = board;
    },
    closeCreateBoardModal(state) {
      state.isCreateBoardModalOpen = false;
    },
  },
});

export const { openCreateBoardModal, closeCreateBoardModal } =
  createBoardModal.actions;

export const useCreateBoardModal = () =>
  useSelector((state) => state.createBoardModal);

export default createBoardModal.reducer;
