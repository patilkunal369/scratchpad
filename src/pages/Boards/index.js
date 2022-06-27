import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import Error from "../../components/common/Error";
import Spinner from "../../components/common/Spinner";
import BoardModal from "../../components/BoardModal";
import { fetchBoards, useBoardsSelector } from "../../store/reducers/boards";
import {
  openCreateBoardModal,
  useCreateBoardModal,
} from "../../store/reducers/createBoardModal";
import { containerVariants } from "../Board/Board.styles";
import BoardButton from "./BoardButton";
import { BoardButtonWrapper, BoardsWrapper } from "./Boards.styles";
import { io } from "socket.io-client";

const Boards = () => {
  const { boards, isLoading, isError, error } = useBoardsSelector();
  const { isCreateBoardModalOpen } = useCreateBoardModal();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBoards());
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {isCreateBoardModalOpen && <BoardModal />}
      </AnimatePresence>
      {isError && <Error errorMessage={error} />}
      <BoardsWrapper variants={containerVariants}>
        <BoardButtonWrapper
          onClick={() => {
            dispatch(openCreateBoardModal({ modalType: "create" }));
          }}
        >
          <AiOutlinePlus size="2rem" />
          <h2>Add Button</h2>
        </BoardButtonWrapper>
        {Object.entries(boards).length > 0 &&
          boards.map((board, index) => (
            <BoardButton board={board} key={index} />
          ))}
        {isLoading && (
          <BoardButtonWrapper
            style={{ position: "relative" }}
            exit={{ opacity: 0 }}
          >
            <Spinner />
          </BoardButtonWrapper>
        )}
      </BoardsWrapper>
    </>
  );
};

export default Boards;
