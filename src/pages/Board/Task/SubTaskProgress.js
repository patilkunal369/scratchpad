import { LinearProgress } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { FiCheckCircle } from "react-icons/fi";
import { styled as muiStyled } from "@mui/material/styles";

const SubTaskProgressWrapper = styled.div`
  display: flex;

  gap: 0.5rem;
  .progress {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background-color: rgb(0, 184, 148);
    padding: 0.3rem 0.5rem;
    color: white;
    border-radius: 0.5rem;
    margin-bottom: 0.3rem;

    span {
      font-size: 0.8rem;
    }
  }
`;

const BorderLinearProgress = muiStyled(LinearProgress)(({ theme }) => ({
  height: "1.8rem",
  borderRadius: 5,
  flexGrow: 1,
}));
const SubTaskProgress = ({ subTasks }) => {
  const completedCount = subTasks.filter(
    (subTask) => subTask.isCompleted
  ).length;

  const totalSubTasks = subTasks.length;

  const progress = Math.round((completedCount / totalSubTasks) * 100);

  return (
    <SubTaskProgressWrapper>
      <BorderLinearProgress
        variant="determinate"
        value={progress}
        color="success"
      />
      <div className="progress">
        <FiCheckCircle size="1rem" />
        <span>
          {completedCount}/{totalSubTasks}
        </span>
      </div>
    </SubTaskProgressWrapper>
  );
};

export default SubTaskProgress;
