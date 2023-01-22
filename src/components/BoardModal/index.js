import { Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import {
  addBoard,
  addBoardLocalState,
  editBoard,
  editBoardLocalState,
} from "../../store/reducers/boards";
import {
  closeCreateBoardModal,
  useCreateBoardModal,
} from "../../store/reducers/createBoardModal";
import ColorPicker from "../ColorPicker";
import Button from "../common/Button";
import Input from "../common/Form/Input";
import Modal from "../Modal";
import { ModalFormWrapper } from "./BoardModal.styles";

const BoardModal = () => {
  const dispatch = useDispatch();
  const { isCreateBoardModalOpen, editBoardValues, modalType } =
    useCreateBoardModal();

  const initialValues = () => {
    if (modalType === "create") {
      return { name: "", color: "", description: "" };
    }
    if (modalType === "edit") {
      return editBoardValues;
    }
  };

  const handleSubmit = (values) => {
    const { name, color, description } = values;
    if (modalType === "create") {
      const payload = {
        name: name,
        description: description,
        color,
      };
      dispatch(addBoardLocalState(payload));
      dispatch(addBoard(payload));
    }
    if (modalType === "edit") {
      const payload = {
        id: editBoardValues.id,
        name: name,
        description: description,
        color,
      };
      dispatch(editBoardLocalState(payload));
      dispatch(editBoard(payload));
    }
    dispatch(closeCreateBoardModal());
  };

  return (
    <Modal handleClose={() => dispatch(closeCreateBoardModal())}>
      <Formik initialValues={initialValues()} onSubmit={handleSubmit}>
        {() => (
          <ModalFormWrapper>
            <p>Please provide board details:</p>
            <Input
              styleType="form"
              name="name"
              placeholder="Enter Board Name"
            />
            <Input
              styleType="form"
              name="description"
              placeholder="Enter Board Description"
            />
            <ColorPicker name="color" />
            <Button styleType="primary" value="Submit" type="submit" />
          </ModalFormWrapper>
        )}
      </Formik>
    </Modal>
  );
};

export default BoardModal;
