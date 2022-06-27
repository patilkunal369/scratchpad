import { Formik } from "formik";
import React from "react";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from "react-redux";
import { useTaskListSelector } from "../../store/reducers/taskList";
import {
  updateTask,
  updateTaskLocalState,
  useTaskModalSelector,
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

const TaskForm = () => {
  const dispatch = useDispatch();

  const { taskList } = useTaskListSelector();
  const { modalType, editTaskValues } = useTaskModalSelector();
  const { tagList } = useSelectedBoardSelector();

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
    dispatch(updateTaskLocalState({ ...values, tags: tags }));
  };

  return (
    <Formik
      initialValues={initialValues()}
      validateOnBlur={false}
      validateOnChange={false}
      onSubmit={handleSubmit}
    >
      {(formik) => (
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
            <Status options={statusOptions()} />
            <AddAssignee />
            <DueDatePicker />
            <Reporter />
            <AddTags name="tags" />
          </DetailsWrapper>
          <ButtonGroup style={{ marginTop: "auto" }}>
            <Button styleType="primary" value="Save" type="submit" />
            <Button styleType="primary" value="Cancel" type="button" />
          </ButtonGroup>
        </TaskFormWrapper>
      )}
    </Formik>
  );
};

export default TaskForm;
