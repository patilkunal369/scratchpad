import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Assignee from "../../components/Assignee";
import { selectBoard } from "../../store/reducers/selectedBoard";
import {
  BoardButtonWrapper,
  boardVariant,
  menuVariant,
  routeVariant,
} from "./Boards.styles";
import Options, { BoardMenu } from "./Options";

const BoardButton = ({ board }) => {
  const navigate = useNavigate();
  const [animation, setAnimation] = useState("route");
  const dispatch = useDispatch();

  const [isOptionsOpen, setIsOptionsOpen] = useState(false);

  const openBoard = (board, e) => {
    setAnimation("board");
    dispatch(selectBoard(board));
    navigate(`/board/${board.id}`, { state: board });
  };

  const selectVariants = () => {
    if (animation === "board") return boardVariant;
    if (animation === "route") return routeVariant;
  };

  return (
    <BoardButtonWrapper
      color={board.color}
      onClick={() => openBoard(board)}
      variants={selectVariants()}
      initial="initial"
      animate="enter"
      // exit="exit"
    >
      <Options setIsOptionsOpen={setIsOptionsOpen} key={1} />
      <AnimatePresence exitBeforeEnter initial={false}>
        {animation !== "board" &&
          (!isOptionsOpen ? (
            <motion.div
              key={2}
              className="details"
              variants={menuVariant}
              initial="initial"
              animate="enter"
              exit="exit"
            >
              <h2> {board.name}</h2>
              <p>{board.description}</p>
              <Assignee imageWidth="2rem" />
            </motion.div>
          ) : (
            <BoardMenu
              board={board}
              setIsOptionsOpen={setIsOptionsOpen}
              key={3}
            />
          ))}
      </AnimatePresence>
    </BoardButtonWrapper>
  );
};

export default BoardButton;
