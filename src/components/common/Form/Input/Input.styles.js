import { Field } from "formik";
import styled from "styled-components";
import { css } from "styled-components";

const commonInput = css`
  color: rgba(121, 135, 148, 1);
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;

  border: 1.5px solid transparent;
  transition: border 0.5s;
  &::placeholder {
    color: rgba(121, 135, 148, 1);
  }

  &:hover {
    border: 1.5px solid var(--primary);
  }
`;

export const StyledInput = styled(Field)`
  border: none;
  outline: none;

  ${(props) => {
    switch (props.styletype) {
      case "search":
        return css`
          ${commonInput}
          min-width: 20ch;
          background: url(https://img.icons8.com/ios-glyphs/798794/search--v1.png)
            no-repeat scroll 0.5rem 0.5rem;
          background-size: 1.5rem;
          background-color: white;
          padding-left: 3rem;
        `;
      case "form":
        return css`
          ${commonInput}
          padding: 0.6rem 1rem;
          width: 100%;

          &.newSubject {
            border: 1.5px solid var(--primary);
          }
        `;
      case "taskForm":
        return css`
          ${commonInput}
          padding: 0.3rem 0.5rem;
          width: 100%;
          font-size: 2rem;
        `;
      case "loginForm":
        return css`
          ${commonInput}
          padding: 0.6rem 1rem;
          width: 100%;
          background-color: transparent;
          border: 1.5px solid var(--neutral_white);
        `;
      case "smallSearch":
        return css`
          ${commonInput}
          min-width: 20ch;
          background: url(https://img.icons8.com/ios-glyphs/798794/search--v1.png)
            no-repeat scroll 0.5rem 0.5rem;
          background-size: 1rem;
          background-color: white;
          transition: transform 0.1s;
          padding: 0.3rem 0.5rem;
          padding-left: 2rem;
        `;
    }
  }}
`;
