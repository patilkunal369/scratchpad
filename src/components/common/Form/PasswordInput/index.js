import React from "react";
import Input from "../Input";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import styled from "styled-components";

const StyledPasswordInput = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .inputIcon {
    padding: 0.3rem;
    border-radius: 100%;

    height: 3rem;
    width: 3.5rem;

    transition: background-color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  }
  .inputIcon:hover {
    background-color: rgba(145, 158, 171, 0.08);
    cursor: pointer;
  }
`;

const PasswordInput = ({ name, ...rest }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <StyledPasswordInput>
      <Input
        styleType="loginForm"
        placeholder="Password"
        name={name}
        type={showPassword ? "text" : "password"}
        {...rest}
      />
      {showPassword ? (
        <AiFillEye
          className="inputIcon"
          onClick={() => setShowPassword(false)}
        />
      ) : (
        <AiFillEyeInvisible
          className="inputIcon"
          onClick={() => setShowPassword(true)}
        />
      )}
    </StyledPasswordInput>
  );
};

export default PasswordInput;
