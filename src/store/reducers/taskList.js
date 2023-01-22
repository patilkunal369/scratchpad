import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../axiosInstance";
import { API_STATUS } from "../../utils/constants";

const initialState = {
  status: "",
  error: "",
  taskList: [],
};

export const fetchTaskList = createAsyncThunk(
  "taskList/fetchTaskList",
  async (boardId, { getState, rejectWithValue }) => {
    const {
      selectedBoard: { id },
    } = getState();

    try {
      const response = await axiosInstance.get(`taskList`, {
        params: { boardId: id ? id : boardId },
      });
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const taskList = createSlice({
  name: "taskList",
  initialState,
  reducers: {
    clearTaskList(state, { type, payload }) {
      state.taskList = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTaskList.pending, (state, action) => {
      state.status = API_STATUS.PENDING;
      state.taskList = [];
    });
    builder.addCase(fetchTaskList.fulfilled, (state, { type, payload }) => {
      state.taskList = payload;
      state.status = API_STATUS.FULFILLED;
      state.isError = false;
    });
    builder.addCase(fetchTaskList.rejected, (state, { error }) => {
      state.status = API_STATUS.REJECTED;
      state.error = error.message;
    });
  },
});

export const { clearTaskList } = taskList.actions;

export const useTaskListSelector = () => useSelector((state) => state.taskList);

export default taskList.reducer;
