import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findIndex } from "lodash";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { axiosInstance } from "../../axiosInstance";
import { API_STATUS } from "../../utils/constants";

const initialState = {
  status: null,
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
        params: { boardId: boardId },
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
export const createTask = createAsyncThunk(
  "taskList/createTask",
  async (task, { getState, rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`tasks`, task);
      return response.data;
    } catch (err) {
      if (!err.response) {
        throw err;
      }
      return rejectWithValue(err.response.data);
    }
  }
);

const displaceTask = (state, taskId, listIndex, listId) => {
  const taskIndex = findIndex(state.tasks, { id: taskId });
  state.tasks[taskIndex].listIndex = listIndex;
  state.tasks[taskIndex].listId = listId;
};

const updateListIndex = (state, listId, taskId, index, type) => {
  state.tasks
    .filter((task) => task.listId === listId && task.id !== taskId)
    .sort((a, b) => a.listIndex - b.listIndex) //because the list is sorted by index in tasks array
    .slice(index)
    .map(({ id, listId, listIndex }) => {
      if (type === "destination") {
        displaceTask(state, id, listIndex + 1, listId);
      }
      if (type === "source") {
        displaceTask(state, id, listIndex - 1, listId);
      }
    });
};

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
    updateTaskLocalState(state, { type, payload }) {
      const taskIndex = state.tasks.findIndex((task) => task.id === payload.id);
      state.tasks[taskIndex] = payload;
    },
    createTaskLocalState(state, { type, payload }) {
      state.tasks.push(payload);
    },

    moveTask(state, { type, payload: { destination, source, draggableId } }) {
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

      displaceTask(
        state,
        draggableId,
        destinationIndex,
        destination.droppableId
      );

      updateListIndex(
        state,
        destination.droppableId,
        draggableId,
        destinationIndex,
        "destination"
      );
      updateListIndex(
        state,
        source.droppableId,
        draggableId,
        sourceIndex,
        "source"
      );
    },
    addTaskToList(state, { type, payload }) {
      const { listId, id: taskId } = payload;
      state.tasks.push(payload);
      const destinationIndex = 0;

      displaceTask(state, taskId, destinationIndex, listId);
      updateListIndex(state, listId, taskId, 0, "destination");
    },
    deleteTask(state, { type, payload }) {
      const { listId, id: taskId } = payload;
      state.tasks.push(payload);
      const destinationIndex = 0;

      displaceTask(state, taskId, destinationIndex, listId);
      updateListIndex(state, listId, taskId, 0, "destination");
    },
    clearTasks(state) {
      state.tasks = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTasks.pending, (state, action) => {
      state.status = API_STATUS.PENDING;
    });
    builder.addCase(fetchTasks.fulfilled, (state, { type, payload }) => {
      state.tasks = payload;
      state.status = API_STATUS.FULFILLED;
    });
    builder.addCase(fetchTasks.rejected, (state, { error }) => {
      state.isLoading = false;
      state.status = API_STATUS.REJECTED;
      state.error = error.message;
    });
    builder.addCase(updateTask.pending, (state, action) => {
      state.status = API_STATUS.PENDING;
      toast.info("Updating task...", { toastId: "updateToast" });
    });
    builder.addCase(updateTask.fulfilled, (state, { type, payload }) => {
      state.status = API_STATUS.FULFILLED;
      toast.update("updateToast", {
        type: toast.TYPE.SUCCESS,
        render: "Task Updated",
      });
    });
    builder.addCase(updateTask.rejected, (state, { error }) => {
      state.status = API_STATUS.REJECTED;
      state.error = error.message;
      toast.update("updateToast", {
        type: toast.TYPE.ERROR,
        autoClose: 1000,
        render: "Error",
      });
    });
  },
});

export const {
  addTask,
  moveTask,
  openTaskModal,
  closeTaskModal,
  updateTaskLocalState,
  createTaskLocalState,
  addTaskToList,
  clearTasks,
} = tasks.actions;

export const useTaskSelector = () => useSelector((state) => state.tasks.tasks);
export const useTaskModalSelector = () => useSelector((state) => state.tasks);

export default tasks.reducer;
