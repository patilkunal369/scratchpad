import { combineReducers } from "@reduxjs/toolkit";
import boards from "./reducers/boards";
import selectedBoard from "./reducers/selectedBoard";
import taskList from "./reducers/taskList";
import tasks from "./reducers/tasks";
import user from "./reducers/user";
import createBoardModal from "./reducers/createBoardModal";
import inviteUser from "./reducers/inviteUser";

export const rootReducer = combineReducers({
  boards,
  selectedBoard,
  taskList,
  tasks,
  createBoardModal,
  user,
  inviteUser,
});
