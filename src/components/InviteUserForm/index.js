import { Autocomplete, Chip, CircularProgress, TextField } from "@mui/material";
import { Formik } from "formik";
import React from "react";

import styled from "@emotion/styled";
import { useDispatch } from "react-redux";
import {
  closeInviteUserModal,
  fetchUsers,
  inviteUser,
  useUserSelector,
} from "../../store/reducers/user";
import { ModalFormWrapper } from "../BoardModal/BoardModal.styles";
import Button from "../common/Button";
import Modal from "../Modal";
import Error from "../../components/common/Error";
import Input from "../common/Form/Input";
import { useEffect } from "react";
import { API_STATUS } from "../../utils/constants";
import Spinner from "../common/Spinner";

const StyledTextField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderRadius: "0.5rem",
    },
  },
});

const InviteUserForm = () => {
  const dispatch = useDispatch();

  const {
    fetch: { status, userList, error },
  } = useUserSelector();

  const handleSubmit = ({ invitee }) => {
    dispatch(inviteUser({ email: invitee.email, id: invitee.id }));
    dispatch(closeInviteUserModal());
  };

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  const emailList = userList?.map((user) => {
    return { label: user.email, ...user };
  });

  return (
    <Modal handleClose={() => dispatch(closeInviteUserModal())}>
      {status === API_STATUS.PENDING && <Spinner />}
      {status === API_STATUS.REJECTED && <Error errorMessage={error} />}
      {status === API_STATUS.FULFILLED && (
        <Formik initialValues={{ email: "" }} onSubmit={handleSubmit}>
          {(formik) => (
            <ModalFormWrapper>
              <p>Enter user emails to invite: </p>
              <Autocomplete
                disablePortal
                id="email"
                options={emailList}
                sx={{ borderRadius: "0.5rem" }}
                loading={status === API_STATUS.PENDING}
                renderInput={(params) => <StyledTextField {...params} />}
                onChange={(event, value) =>
                  formik.setFieldValue("invitee", value)
                }
              />
              <Button styleType="primary" value="Invite" type="submit" />
            </ModalFormWrapper>
          )}
        </Formik>
      )}
    </Modal>
  );
};

export default InviteUserForm;
