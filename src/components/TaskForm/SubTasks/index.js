import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { FiPlusSquare, FiCheck, FiTrash, FiX, FiPlus } from "react-icons/fi";
import Input from "../../common/Form/Input";
import { Formik, FieldArray, Field, Form, useFormikContext } from "formik";
import { IconButton } from "@mui/material";
import { useState } from "react";
import { SubTasksWrapper, SubTaskWrapper } from "./SubTasks.styles";
import SubTaskList from "./SubTaskList";

const SubTasks = () => {
  const [canAdd, setCanAdd] = useState();

  const { values, setFieldValue } = useFormikContext();

  return (
    <SubTasksWrapper>
      <FieldArray name="subTasks">
        {({ remove, insert }) => (
          <>
            <p>Sub Tasks</p>

            <SubTaskWrapper style={{ backgroundColor: "var(--neutral_white)" }}>
              <Input
                styleType="form"
                placeholder="Enter subject for subtask"
                name="newSubTask"
                className="newSubject"
              />

              <IconButton
                size="small"
                onClick={() => {
                  insert(0, {
                    subject: values.newSubTask,
                    isCompleted: false,
                  });
                  setFieldValue("newSubTask", "");
                }}
              >
                <FiPlus size="1.5rem" color="green" />
              </IconButton>
            </SubTaskWrapper>

            <SubTaskList remove={remove} />
          </>
        )}
      </FieldArray>
    </SubTasksWrapper>
  );
};

export default SubTasks;
