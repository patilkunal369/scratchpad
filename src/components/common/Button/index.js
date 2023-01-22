import { motion } from "framer-motion";
import React from "react";
import styled, { css } from "styled-components";

const commonButton = css`
  color: var(--neutral_light_grey);
  padding: 0.5rem 2rem;
  border-radius: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const StyledButton = styled(motion.button)`
  outline: none;
  border: none;

  ${(props) => {
    switch (props.styletype) {
      case "topBar":
        return css`
          ${commonButton}
          background-color: white;

          border-radius: 0.5rem;
          padding: 0.5rem;
          color: rgba(121, 135, 148, 1);
        `;
      case "primary":
        return css`
          ${commonButton}
          background-color: var(--primary);
        `;
      case "secondary":
        return css`
          ${commonButton}
          color: var(--primary);
          background-color: white;
          border: 2px solid rgb(227, 228, 249);
        `;
      case "largeButton":
        return css`
          ${commonButton}
          background-color: ${props.buttoncolor
            ? props.buttoncolor
            : "var(--primary)"};
          font-size: 2rem;
          padding: 3.5rem;
          max-height: 10rem;
          width: 100%;
        `;
      case "boardMenu":
        return css`
          ${commonButton}
          background-color: transparent;
          border-radius: 0.5rem;
          padding: 0.5rem;
          color: white;
        `;
      case "select":
        return css`
          ${commonButton}
          color: var(--neutral_grey_dark);
          gap: 1rem;
          background-color: transparent;
          width: 100%;
        `;
    }
  }}
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  & > * {
    flex-grow: 1;
  }
`;

export const Button = ({
  name,
  value,
  styleType,
  buttonColor,
  children,
  scale = 1.03,
  text,
  hoverProps,
  ...rest
}) => {
  return (
    <StyledButton
      name={name}
      styletype={styleType}
      buttoncolor={buttonColor}
      {...rest}
      whileHover={{
        scale: scale,
        transition: { duration: 0.1 },
        ...hoverProps,
      }}
    >
      {value}
      {text}
      {children}
    </StyledButton>
  );
};

export default Button;
