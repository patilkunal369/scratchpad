import { motion } from "framer-motion";
import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import Assignee from "../../../components/Assignee";
import Deadline from "../../../components/Deadline";
import { openTaskModal } from "../../../store/reducers/tasks";
import Tag from "./Tag";
import { DetailsWrapper, TaskWrapper } from "./Task.styles";
import { useSelectedBoardSelector } from "../../../store/reducers/selectedBoard";

const Tags = ({ tags }) => {
  const { tagList } = useSelectedBoardSelector();
  return (
    <div className="tags">
      {tags.map((currentTag, index) => {
        const { label, value, color } = tagList.find(
          (item) => item.value === currentTag
        );
        return <Tag label={label} color={color} key={index} />;
      })}
    </div>
  );
};

const Task = ({ task, index }) => {
  const dispatch = useDispatch();

  const { id, tags, subject, description, timeLeft } = task;

  const handleClick = () => {
    dispatch(openTaskModal({ task, modalType: "edit" }));
  };

  return (
    <>
      <Draggable draggableId={id} key={id} index={index}>
        {(provided, snapshot) => (
          <motion.div
            {...provided.draggableProps}
            ref={provided.innerRef}
            {...provided.dragHandleProps}
            style={{ ...provided.draggableProps.style, userSelect: "none" }}
            onClick={handleClick}
          >
            {provided.placeholder}
            <TaskWrapper>
              <Tags tags={tags} />
              <h3>{subject}</h3>
              <p>{description}</p>
              <DetailsWrapper>
                <Assignee imageWidth="1.5rem" />
                <Deadline timeLeft={timeLeft} />
              </DetailsWrapper>
            </TaskWrapper>
          </motion.div>
        )}
      </Draggable>
    </>
  );
};

export default Task;
