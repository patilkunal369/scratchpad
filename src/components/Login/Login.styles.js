import { Form } from "formik";
import { motion } from "framer-motion";
import styled from "styled-components";

export const LoginWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  form {
    height: max-content;
  }
`;

export const LoginFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  padding: 2rem;
  border-radius: 0.5rem;
  p {
    margin-left: 0.5rem;
  }
`;

export const loginVariant = {
  initial: { x: "-100vw" },
  animate: {
    x: 0,
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
  exit: {
    x: "-100vw",
    transition: { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};
