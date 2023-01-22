import React from "react";
import { FiCheck, FiTrash } from "react-icons/fi";
import Input from "../../common/Form/Input";
import { IconButton } from "@mui/material";
import { useFormikContext } from "formik";
import { SubTaskListWrapper, SubTaskWrapper } from "./SubTasks.styles";

const SubTaskList = ({ remove }) => {
  const {
    values: { subTasks },
    setFieldValue,
  } = useFormikContext();
  return (
    <SubTaskListWrapper>
      {subTasks.map((subTask, index) => {
        return (
          <SubTaskWrapper key={index}>
            <Input
              styleType="form"
              placeholder="Subject"
              name={`subTasks[${index}].subject`}
            />

            <IconButton
              size="small"
              style={{
                backgroundColor: subTasks[index].isCompleted
                  ? "rgb(76, 175, 80)"
                  : "white",
              }}
              onClick={() =>
                setFieldValue(`subTasks[${index}].isCompleted`, true)
              }
            >
              <FiCheck size="1rem" color="green" />
            </IconButton>
            <IconButton
              size="small"
              color="error"
              onClick={() => remove(index)}
            >
              <FiTrash size="1rem" />
            </IconButton>
          </SubTaskWrapper>
        );
      })}
    </SubTaskListWrapper>
  );
};

export default SubTaskList;
