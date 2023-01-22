import React from "react";
import styled from "styled-components";
import { BsClockHistory } from "react-icons/bs";
import moment from "moment";

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

const Deadline = ({ dueDate }) => {
  const formattedTodaysDate = moment(new Date(), "MM-Dd-YYYY");
  const formattedDueDate = moment(dueDate, "MM-DD-YYYY");

  const daysLeft = formattedDueDate.diff(formattedTodaysDate, "day");
  return (
    <DeadlineWrapper>
      <BsClockHistory size="1rem" />
      <span>{daysLeft > 0 ? `${daysLeft} Days Left` : "Over Due"}</span>
    </DeadlineWrapper>
  );
};

export default Deadline;
