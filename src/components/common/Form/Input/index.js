import React from "react";
import { StyledInput } from "./Input.styles";

const Input = ({ name, styleType, ...rest }) => {
  return <StyledInput name={name} styletype={styleType} {...rest} />;
};

export default Input;
