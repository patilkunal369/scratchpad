import React from "react";
import styled from "styled-components";
import { BsClockHistory } from "react-icons/bs";

const DeadlineWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background-color: rgb(254, 237, 232);
  padding: 0.3rem 0.5rem;
  color: rgb(251, 183, 166);
  border-radius: 0.5rem;

  span {
    font-size: 0.8rem;
  }
`;

const Deadline = ({ timeLeft }) => {
  return (
    <DeadlineWrapper>
      <BsClockHistory size="1rem" />
      <span>{timeLeft} Left</span>
    </DeadlineWrapper>
  );
};

export default Deadline;
