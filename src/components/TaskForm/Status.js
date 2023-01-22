import React from "react";
import { useFormikContext } from "formik";
import { useDispatch } from "react-redux";
import { moveTask } from "../../store/reducers/tasks";
import Color from "../ColorPicker/Color";
import Select from "../common/Form/Select";
import { StyledOption } from "../common/Form/Select/Select.styles";

const Status = ({ options, modalType }) => {
  const { setFieldValue, values } = useFormikContext();
  const dispatch = useDispatch();

  const handleChange = (value) => {
    setFieldValue("listId", value);

    if (modalType === "edit") {
      dispatch(
        moveTask({
          source: { droppableId: values.listId, index: values.listIndex },
          destination: { droppableId: value, index: 0 },
          draggableId: values.id,
        })
      );
    }
  };
  return (
    <div>
      <p>Status</p>
      <Select name="listId" handleChange={handleChange}>
        {options.map((option, index) => (
          <StyledOption key={index} value={option.value}>
            <Color color={option.color} />
            {option.label}
          </StyledOption>
        ))}
      </Select>
    </div>
  );
};

export default Status;
