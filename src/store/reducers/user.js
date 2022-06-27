import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../axiosInstance";
import { API_STATUS } from "../../utils/constants";

const initialState = {
  login: {
    status: null,
    token: null,
    email: null,
    error: null,
  },
  isAuthenticated: localStorage.getItem("token") ? true : false,
  userId: localStorage.getItem("userId")
    ? localStorage.getItem("userId")
    : null,
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

const user = createSlice({
  name: "user",
  initialState,
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
  },
});

export const {} = user.actions;

export const useLoginSelector = () => useSelector((state) => state.user.login);
export const useUserSelector = () => useSelector((state) => state.user);

export default user.reducer;
