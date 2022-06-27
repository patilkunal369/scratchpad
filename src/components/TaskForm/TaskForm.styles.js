import { Form } from "formik";
import styled from "styled-components";

export const TaskFormWrapper = styled(Form)`
  padding: 1rem;
  background-color: white;
  max-width: min-content;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

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

  gap: 2rem;
  padding: 1rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;

  border-radius: 0.5rem;
  p {
    margin-bottom: 0.5rem;
  }
`;
