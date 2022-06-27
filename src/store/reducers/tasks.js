import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findIndex } from "lodash";
import { useSelector } from "react-redux";
import { axiosInstance } from "../../axiosInstance";

const initialState = {
  isLoading: false,
  isError: false,
  error: null,
  tasks: [],
  isTaskModalOpen: false,
  modalType: "",
  editTaskValues: {},
};

export const fetchTasks = createAsyncThunk(
  "taskList/fetchTasks",
  async (boardId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`tasks`, {
        params: { boardId },
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
export const updateTask = createAsyncThunk(
  "taskList/updateTasks",
  async (task, { getState, rejectWithValue }) => {
    try {
      const response = await axiosInstance.patch(`tasks/${task.id}`, task);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const tasks = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    openTaskModal(state, { type, payload: { modalType, task = {} } }) {
      state.isTaskModalOpen = true;
      state.modalType = modalType;
      state.editTaskValues = task;
    },
    closeTaskModal(state) {
      state.isTaskModalOpen = false;
    },
    addTask(state, { type, payload }) {
      state.tasks.push(payload);
    },
    updateTaskLocalState(state, { type, payload }) {
      const taskIndex = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks[taskIndex] = payload;
    },

    moveTask(state, { type, payload: { destination, source, draggableId } }) {
      const displaceTask = (taskId, listIndex, listId) => {
        const taskIndex = findIndex(state.tasks, { id: taskId });
        state.tasks[taskIndex].listIndex = listIndex;
        state.tasks[taskIndex].listId = listId;
      };
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      const destinationIndex = destination.index;
      const sourceIndex = source.index;

      displaceTask(draggableId, destinationIndex, destination.droppableId);

      // Update index in destination list
      state.tasks
        .filter(
          (task) =>
            task.listId === destination.droppableId && task.id !== draggableId
        )
        .slice(destinationIndex)
        .map(({ id, listId, listIndex }) => {
          displaceTask(id, listIndex + 1, listId);
        });
      // Update state.task in source list
      state.tasks
        .filter(
          (task) =>
            task.listId === source.droppableId && task.id !== draggableId
        )
        .slice(sourceIndex)
        .map(({ id, listId, listIndex }) => {
          displaceTask(id, listIndex - 1, listId);
        });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.isError = false;
      state.isLoading = true;
    });
    builder.addCase(fetchTasks.fulfilled, (state, { type, payload }) => {
      state.tasks = payload;
      state.isLoading = false;
      state.isError = false;
    });
    builder.addCase(fetchTasks.rejected, (state, { error }) => {
      state.isLoading = false;
      state.isError = true;
      state.error = error.message;
    });
  },
});

export const {
  addTask,
  moveTask,
  openTaskModal,
  closeTaskModal,
  updateTaskLocalState,
} = tasks.actions;

export const useTaskSelector = () => useSelector((state) => state.tasks.tasks);
export const useTaskModalSelector = () => useSelector((state) => state.tasks);

export default tasks.reducer;
