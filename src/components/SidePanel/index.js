import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Backdrop from "../Modal/Backdrop";
import { closeTaskModal } from "../../store/reducers/tasks";
import { useDispatch } from "react-redux";

const SidePanelWrapper = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;

  border-radius: 0.5rem;
  overflow: hidden;
`;
const SidePanel = ({ children }) => {
  const dispatch = useDispatch();
  return (
    <Backdrop onClick={() => dispatch(closeTaskModal())} key="backdrop">
      <SidePanelWrapper
        initial={{ x: "100vw" }}
        animate={{ x: 0 }}
        exit={{ x: "100vw" }}
        transition={{
          type: "tween",
          ease: [0.23, 1, 0.32, 1],
          duration: 0.5,
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </SidePanelWrapper>
    </Backdrop>
  );
};

export default SidePanel;
