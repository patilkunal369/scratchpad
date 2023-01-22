import { Formik } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch, useSelector } from "react-redux";
import { useTaskListSelector } from "../../store/reducers/taskList";
import {
  addTaskToList,
  closeTaskModal,
  createTask,
  createTaskLocalState,
  updateTask,
  updateTaskLocalState,
  useTaskModalSelector,
  moveTask,
} from "../../store/reducers/tasks";
import Input from "../common/Form/Input";
import RichTextBox from "../common/Form/RichTextbox";
import AddAssignee from "./AddAssignee";
import AddTags from "./AddTags";
import DueDatePicker from "./DueDatePicker";
import Reporter from "./Reporter";
import Status from "./Status";
import { DetailsWrapper, TaskFormWrapper } from "./TaskForm.styles";
import { useSelectedBoardSelector } from "../../store/reducers/selectedBoard";
import Button, { ButtonGroup } from "../common/Button";
import moment from "moment";
import { v4 as uuid } from "uuid";
import { Snackbar } from "@mui/material";
import { API_STATUS } from "../../utils/constants";
import SubTasks from "./SubTasks";

const TaskForm = () => {
  const dispatch = useDispatch();

  const { taskList } = useTaskListSelector();
  const { modalType, editTaskValues } = useTaskModalSelector();
  const { id: boardId, tagList } = useSelectedBoardSelector();

  const formatTags = () => {
    return editTaskValues.tags.map((tag) => {
      const { label, value, color } = tagList.find(
        (item) => item.value === tag
      );

      return `${label}|${value}|${color}`;
    });
  };

  const initialValues = () => {
    if (modalType == "edit") {
      return {
        ...editTaskValues,
        tags: formatTags(),
      };
    }
    if (modalType == "create") {
      return {
        subject: "",
        description: "",
        listId: taskList[0].id,
        tags: [],
        dueDate: moment(new Date()).format("L"),
        subTasks: [],
      };
    }
  };

  const statusOptions = () => {
    return taskList.map(({ name, id, color }, index) => {
      return {
        label: name,
        value: id,
        color: color,
      };
    });
  };

  const handleSubmit = (values) => {
    const tags = values.tags.map((tag) => {
      const [label, value, color] = tag.split("|");
      return value;
    });
    if (modalType === "edit") {
      dispatch(updateTaskLocalState({ ...values, tags: tags }));
      dispatch(updateTask({ ...values, tags: tags }));
    }

    if (modalType === "create") {
      const parameters = {
        ...values,
        boardId: boardId,
        id: uuid(),
        tags: tags,
        listIndex: 0,
      };

      dispatch(addTaskToList(parameters));
    }
    dispatch(closeTaskModal());
  };

  return (
    <Formik
      initialValues={initialValues()}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {({ values }) => (
        <TaskFormWrapper>
          <div className="inputs">
            <Input
              name="subject"
              placeholder="Enter the subject"
              styleType="taskForm"
            />
            <RichTextBox name="description" />
          </div>

          <DetailsWrapper>
            <Status options={statusOptions()} modalType={modalType} />
            <AddAssignee />
            <DueDatePicker />
            <Reporter />
            <AddTags name="tags" />
          </DetailsWrapper>
          <SubTasks subTasks={editTaskValues.subTasks} />
          <ButtonGroup style={{ marginTop: "auto" }}>
            <Button styleType="primary" value="Save" type="submit" />
            <Button styleType="secondary" value="Reset" type="reset" />
          </ButtonGroup>
        </TaskFormWrapper>
      )}
    </Formik>
  );
};

export default TaskForm;
