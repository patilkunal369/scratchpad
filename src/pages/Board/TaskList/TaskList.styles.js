import { motion } from "framer-motion";
import styled from "styled-components";

export const TaskListWrapper = styled(motion.li)`
  height: 100%;
  min-width: 20rem;

  h2 {
    display: flex;
    align-items: center;

    font-size: 1.3rem;
    color: white;
  }
  .taskList {
    overflow: auto;
    height: 100%;
    padding: 1rem 0.5rem;
    /* max-width: 20rem; */
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .taskCount {
    margin-left: 0.5rem;
    background-color: rgb(227, 231, 236);
    padding: 0.1rem 0.3rem;
    border-radius: 1rem;
    font-size: 1rem;
    color: rgb(142, 153, 165);
  }
`;

export const Circle = styled.div`
  background-color: ${(props) => props.color};
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;

export const taskListVariants = {
  hidden: { opacity: 0, y: 300 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};
