import { useFormikContext } from "formik";
import React from "react";
import { StyledColor } from "./ColorPicker.styles";

const Color = ({ color, name }) => {
  const {
    setFieldValue,
    values: { color: selectedColor },
  } = useFormikContext();
  return (
    <StyledColor
      color={color}
      className={selectedColor === color && "selected"}
      onClick={() => name && setFieldValue(name, color)}
    />
  );
};

export default Color;
