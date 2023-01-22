import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Backdrop from "./Backdrop";

const Modal = ({ handleClose, children }) => {
  return (
    <Backdrop onClick={handleClose} key="backdrop">
      <motion.div
        onClick={(e) => e.stopPropagation()}
        key="modal"
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        exit={{ y: "100vh" }}
        transition={{
          type: "tween",
          linear: [0.23, 1, 0.32, 1],
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
    </Backdrop>
  );
};

export default Modal;
