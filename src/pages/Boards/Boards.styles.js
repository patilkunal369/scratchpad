import { motion } from "framer-motion";
import styled from "styled-components";
import { COLORS } from "../../utils/colors";

export const BoardButtonWrapper = styled(motion.div)`
  position: relative;
  gap: 0.5rem;
  color: var(--neutral_light_grey);
  border-radius: 0.5rem;
  padding: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${(props) =>
    props.color ? props.color : "var(--primary)"};
  min-height: 10rem;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  h2 {
    font-size: 1.5rem;
    /* text-align: center; */
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 0.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
  }

  p {
    font-size: 1rem;
    color: var(--neutral_light_grey);
    margin-bottom: 0.5rem;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .option {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;
    padding: 0.3rem;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
  }

  ul {
    margin-top: 0.5rem;
  }
`;

export const BoardsWrapper = styled(motion.div)`
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 1rem;
`;

export const BoardMenuWrapper = styled(motion.div)`
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  margin: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] };

export const boardVariant = {
  initial: { scale: 0, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    scale: 10,
    clipPath: ["circle(0%)", "circle(50%)", "circle(125%)"],

    transition: { ...transition, duration: 0.7 },
  },
};

//Animation for route change
export const routeVariant = {
  initial: { scale: 0.8, opacity: 0 },
  enter: { scale: 1, opacity: 1, transition },
  exit: {
    opacity: 0,
    duration: 0.01,
  },
};
export const menuVariant = {
  initial: {
    y: -150,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.3,
    },
  },
  exit: {
    y: 150,
    opacity: 0,
    transition: {
      type: "tween",
      ease: "linear",
      duration: 0.3,
    },
  },
};
