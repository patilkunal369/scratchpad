import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../axiosInstance";
import { API_STATUS } from "../../utils/constants";
import { v4 as uuid } from "uuid";

const initialState = {
  login: {
    status: null,
    token: null,
    email: null,
    error: null,
  },
  invite: {
    status: null,
    error: null,
  },
  fetch: {
    status: null,
    error: null,
    userList: [],
  },
  isAuthenticated: localStorage.getItem("token") ? true : false,
  userId: localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null,
  isInviteUserModalOpen: false,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`auth/login`, userData);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const fetchUsers = createAsyncThunk(
  "user/fetch",
  async (__, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("users");
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

export const inviteUser = createAsyncThunk(
  "user/inviteUser",
  async ({ email, id }, { rejectWithValue, getState }) => {
    const state = getState();

    const parameters = {
      userId: id,
      boardId: state.selectedBoard.id,
      email: email,
    };

    try {
      const response = await axiosInstance.post("/inviteUser", parameters);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    openInviteUserModal(state, { type, payload }) {
      state.isInviteUserModalOpen = true;
    },
    closeInviteUserModal(state) {
      state.isInviteUserModalOpen = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginUser.pending, (state, action) => {
      state.login.status = API_STATUS.PENDING;
      state.isAuthenticated = false;
    });
    builder.addCase(loginUser.fulfilled, (state, { type, payload }) => {
      state.login.status = API_STATUS.FULFILLED;

      state.isAuthenticated = true;
      state.login.token = payload.access_token;
      state.userId = payload.id;
      localStorage.setItem("token", payload.access_token);
      localStorage.setItem("userId", payload.id);
    });
    builder.addCase(loginUser.rejected, (state, { payload }) => {
      state.login.status = API_STATUS.REJECTED;
      state.isAuthenticated = true;
      state.login.error = payload.message;
    });

    builder.addCase(inviteUser.pending, (state, action) => {
      state.invite.status = API_STATUS.PENDING;
    });
    builder.addCase(inviteUser.fulfilled, (state, { type, payload }) => {
      state.invite.status = API_STATUS.FULFILLED;
    });
    builder.addCase(inviteUser.rejected, (state, { payload }) => {
      state.invite.status = API_STATUS.REJECTED;
      state.invite.error = payload.message;
    });
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.fetch.status = API_STATUS.PENDING;
    });
    builder.addCase(fetchUsers.fulfilled, (state, { type, payload }) => {
      state.fetch.status = API_STATUS.FULFILLED;
      state.fetch.userList = payload;
    });
    builder.addCase(fetchUsers.rejected, (state, { payload }) => {
      state.fetch.status = API_STATUS.REJECTED;
      console.log(payload);
      state.fetch.error = payload.message;
    });
  },
});

export const { openInviteUserModal, closeInviteUserModal } = user.actions;

export const useLoginSelector = () => useSelector((state) => state.user.login);
export const useUserSelector = () => useSelector((state) => state.user);

export default user.reducer;
