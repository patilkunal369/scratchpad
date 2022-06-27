import React from "react";
import { useDispatch } from "react-redux";
import { closeTaskModal } from "../../store/reducers/tasks";
import Modal from "../Modal";

import TaskForm from "../TaskForm";

const TaskModal = () => {
  const dispatch = useDispatch();
  return (
    <Modal handleClose={() => dispatch(closeTaskModal())}>
      <TaskForm />
    </Modal>
  );
};

export default TaskModal;
