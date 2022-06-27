import React from "react";
import { ErrorWrapper } from "./Error.styles";

const Error = ({ errorMessage }) => {
  return <ErrorWrapper>{errorMessage}</ErrorWrapper>;
};

export default Error;
