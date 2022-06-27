import Board from "../../pages/Board";
import Boards from "../../pages/Boards";
import Dashboard from "../../pages/Dashboard";

export const routes = [
  {
    path: "/",
    component: Boards,
    needsAuth: true,
  },
  {
    path: "/board/:id",
    component: Board,
    needsAuth: true,
  },
  {
    path: "/dashboard",
    component: Dashboard,
    needsAuth: true,
  },
];
