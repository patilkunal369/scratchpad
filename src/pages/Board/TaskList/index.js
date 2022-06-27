import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { useTaskSelector } from "../../../store/reducers/tasks";
import Task from "../Task";
import { Circle, taskListVariants, TaskListWrapper } from "./TaskList.styles";

const TaskList = ({ listId, list: { name, color } }) => {
  const tasks = useTaskSelector();

  const sortedTasksByListIndex = tasks
    .filter((task) => task.listId === listId)
    .sort((a, b) => {
      return a.listIndex - b.listIndex;
    });
  return (
    <TaskListWrapper variants={taskListVariants}>
      <h2>
        <Circle color={color} />
        {name}
        <span className="taskCount">{sortedTasksByListIndex.length}</span>
      </h2>
      <Droppable droppableId={listId} key={listId}>
        {(provided, snapshot) => (
          <>
            <ul
              className="taskList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sortedTasksByListIndex.map((task, index) => {
                return <Task task={task} index={index} key={task.id} />;
              })}
              {provided.placeholder}
            </ul>
          </>
        )}
      </Droppable>
    </TaskListWrapper>
  );
};

export default TaskList;
