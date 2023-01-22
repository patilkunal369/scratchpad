import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { v4 as uuid } from "uuid";
import { axiosInstance } from "../../axiosInstance";

const initialState = {
  isLoading: false,
  isError: false,
  error: "",
  boards: [],
};

export const fetchBoards = createAsyncThunk(
  "boards/fetchBoards",
  async (__, { getState, rejectWithValue }) => {
    const {
      user: { userId },
    } = getState();

    try {
      const response = await axiosInstance.get(`boards`, {
        params: { userId },
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

export const addBoard = createAsyncThunk(
  "boards/addBoard",
  async (board, { getState, rejectWithValue }) => {
    const {
      user: { userId },
    } = getState();

    try {
      const response = await axiosInstance.post("boards", {
        id: uuid(),
        userId,
        members: [userId],
        tagList: [],
        ...board,
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

export const deleteBoard = createAsyncThunk(
  "boards/deleteBoard",
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`boards/${boardId}`);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);
export const editBoard = createAsyncThunk(
  "boards/editBoard",
  async (updatedParams, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(
        `boards/${updatedParams.id}`,
        updatedParams
      );
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const boards = createSlice({
  name: "boards",
  initialState,
  reducers: {
    addBoardLocalState(state, { type, payload }) {
      state.boards.push({
        id: uuid(),
        ...payload,
      });
    },
    deleteBoardLocalState(state, { type, payload }) {
      state.boards = state.boards.filter((board) => board.id !== payload);
    },
    editBoardLocalState(state, { type, payload }) {
      const index = state.boards.findIndex((board) => board.id === payload.id);
      state.boards[index] = { ...state.boards[index], ...payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBoards.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchBoards.fulfilled, (state, { type, payload }) => {
      state.boards = payload.boards;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchBoards.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.isError = true;

      state.error = payload.message;
    });
    builder.addCase(addBoard.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(addBoard.fulfilled, (state, { type, payload }) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(addBoard.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = error.message;
    });
    builder.addCase(deleteBoard.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(deleteBoard.fulfilled, (state, { type, payload }) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(deleteBoard.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = error.message;
    });
    builder.addCase(editBoard.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(editBoard.fulfilled, (state, { type, payload }) => {
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(editBoard.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = error.message;
    });
  },
});

export const useBoardsSelector = () => useSelector((state) => state.boards);
export const {
  addBoardLocalState,
  deleteBoardLocalState,
  editBoardLocalState,
} = boards.actions;

export default boards.reducer;
