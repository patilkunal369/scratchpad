import React from "react";
import styled from "styled-components";
import Button from "../../common/Button";
import { AiOutlineFilter, AiOutlinePlus } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { openTaskModal } from "../../../store/reducers/tasks";

const OptionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Options = () => {
  const dispatch = useDispatch();

  return (
    <OptionsWrapper>
      <Button value="Filters" styleType="secondary">
        <AiOutlineFilter />
      </Button>
      <Button
        value="New Task"
        styleType="primary"
        onClick={() => dispatch(openTaskModal({ modalType: "create" }))}
      >
        <AiOutlinePlus />
      </Button>
    </OptionsWrapper>
  );
};

export default Options;
