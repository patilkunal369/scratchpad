import { Form } from "formik";
import { motion } from "framer-motion";
import styled from "styled-components";

export const ModalFormWrapper = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: var(--neutral_light_grey);
  gap: 1rem;
  border-radius: 0.5rem;
  min-width: 30rem;
`;

export const modalFormVariants = {
  initial: {
    y: -300,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 300,
    opacity: 0,
  },
};
