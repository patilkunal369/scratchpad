import { motion } from "framer-motion";
import React from "react";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineUsergroupAdd,
} from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";
import Button from "../../components/common/Button";
import {
  deleteBoard,
  deleteBoardLocalState,
} from "../../store/reducers/boards";
import { openCreateBoardModal } from "../../store/reducers/createBoardModal";

import { BoardMenuWrapper, menuVariant } from "./Boards.styles";

export const BoardMenu = ({ board, setIsOptionsOpen }) => {
  const dispatch = useDispatch();

  const handleClick = (e, type) => {
    e.stopPropagation();

    switch (type) {
      case "delete":
        setIsOptionsOpen(false);
        dispatch(deleteBoardLocalState(board.id));
        dispatch(deleteBoard(board.id));
        return;
      case "edit":
        setIsOptionsOpen(false);
        dispatch(openCreateBoardModal({ modalType: "edit", board }));
        return;
    }
  };
  return (
    <BoardMenuWrapper
      variants={menuVariant}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <Button
        styleType="boardMenu"
        onClick={(e) => handleClick(e, "delete")}
        scale={1.5}
      >
        <AiOutlineDelete size="2rem" />
      </Button>
      <Button
        styleType="boardMenu"
        scale={1.5}
        onClick={(e) => handleClick(e, "edit")}
      >
        <AiOutlineEdit size="2rem" />
      </Button>
      <Button
        styleType="boardMenu"
        scale={1.5}
        onClick={(e) => handleClick(e, "")}
      >
        <AiOutlineUsergroupAdd size="2rem" />
      </Button>
    </BoardMenuWrapper>
  );
};

const Options = ({ setIsOptionsOpen }) => {
  return (
    <motion.div
      color="white"
      className="option"
      onClick={(e) => {
        e.stopPropagation();

        setIsOptionsOpen((prevState) => !prevState);
      }}
      whileHover={{
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        borderRadius: "1rem",
      }}
    >
      <BsThreeDotsVertical size="1.5rem" style={{ display: "flex" }} />
    </motion.div>
  );
};

export default Options;
