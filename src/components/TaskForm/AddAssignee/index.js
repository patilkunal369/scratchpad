import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Assignee from "../../Assignee";
import { AddAssigneeWrapper } from "./AddAssignee.styles";

const AddAssignee = () => {
  return (
    <AddAssigneeWrapper>
      <p>Assignee</p>
      <div>
        <Assignee imageWidth="2.5rem" />
        <AiOutlinePlus size="2rem" />
      </div>
    </AddAssigneeWrapper>
  );
};

export default AddAssignee;
