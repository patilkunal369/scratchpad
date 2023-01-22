import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

const initialState = {
  isInviteUserModalOpen: false,
};

const inviteUser = createSlice({
  name: "inviteUser",
  initialState,
  reducers: {
    openInviteUserModal(state, { type, payload }) {
      state.isInviteUserModalOpen = true;
    },
    closeInviteUserModal(state) {
      state.isInviteUserModalOpen = false;
    },
  },
});

export const { openInviteUserModal, closeInviteUserModal } = inviteUser.actions;

export const useInviteUser = () => useSelector((state) => state.inviteUser);

export default inviteUser.reducer;
