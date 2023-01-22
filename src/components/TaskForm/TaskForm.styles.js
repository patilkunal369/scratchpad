import { Form } from "formik";
import styled from "styled-components";

export const TaskFormWrapper = styled(Form)`
  padding: 1rem;
  background-color: white;
  width: min-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  overflow-y: scroll;
  overflow-x: hidden;

  h2 {
    color: var(--neutral_font);
  }

  .inputs {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    color: var(--neutral_font);
  }
`;

export const DetailsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  gap: 1rem;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  border-radius: 0.5rem;
  p {
    margin-bottom: 0.5rem;
    font-weight: 450;
    font-size: 1.3rem;
  }
`;
