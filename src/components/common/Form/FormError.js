import React from "react";
import { ErrorMessage } from "formik";
import styled from "styled-components";
const StyledError = styled.p`
  color: var(--error);
`;

const FormError = ({ name }) => {
  return (
    <ErrorMessage name={name}>
      {(error) => <StyledError>{error}</StyledError>}
    </ErrorMessage>
  );
};

export default FormError;
