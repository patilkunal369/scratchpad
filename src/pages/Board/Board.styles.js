import { motion } from "framer-motion";
import styled from "styled-components";

export const BoardContainer = styled(motion.ul)`
  padding: 1rem 2rem;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;

  gap: 1rem;

  overflow-x: auto;
  overflow-y: hidden;
`;

export const containerVariants = {
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
