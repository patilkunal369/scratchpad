import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import Error from "../../components/common/Error";
import Spinner from "../../components/common/Spinner";
import SidePanel from "../../components/SidePanel";
import TaskForm from "../../components/TaskForm";
import {
  selectBoard,
  useSelectedBoardSelector,
} from "../../store/reducers/selectedBoard";
import {
  fetchTaskList,
  useTaskListSelector,
} from "../../store/reducers/taskList";
import { fetchTasks, moveTask } from "../../store/reducers/tasks";
import { API_STATUS } from "../../utils/constants";
import { BoardContainer, containerVariants } from "./Board.styles";
import TaskList from "./TaskList";

const Board = () => {
  const dispatch = useDispatch();
  const board = useSelectedBoardSelector();
  const { taskList, status, error } = useTaskListSelector();

  const { state } = useLocation();

  useEffect(() => {
    if (state) {
      dispatch(selectBoard(state));
      dispatch(fetchTaskList(state.boardId));
      dispatch(fetchTasks(state.boardId));
    }
  }, [state]);

  const onDragEnd = (result) => {
    dispatch(moveTask(result));
  };

  const isTaskModalOpen = useSelector((state) => state.tasks.isTaskModalOpen);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isTaskModalOpen && (
          <SidePanel key="sidePanel">
            <TaskForm />
          </SidePanel>
        )}
      </AnimatePresence>

      <DragDropContext onDragEnd={onDragEnd}>
        <motion.div style={{ backgroundColor: board.color, height: "100%" }}>
          {status === API_STATUS.PENDING && <Spinner />}
          {status === API_STATUS.REJECTED && <Error errorMessage={error} />}
          {status === API_STATUS.FULFILLED && (
            <>
              {taskList.length === 0 && (
                <Error errorMessage="No Task added yet" />
              )}

              <BoardContainer
                color={board.color}
                initial="hidden"
                animate="show"
                variants={containerVariants}
              >
                {taskList.length > 0 &&
                  taskList.map((list) => {
                    return (
                      <TaskList key={list.id} listId={list.id} list={list} />
                    );
                  })}
              </BoardContainer>
            </>
          )}
        </motion.div>
      </DragDropContext>
    </>
  );
};

export default Board;
