import { Form, Formik } from "formik";
import React from "react";
import styled from "styled-components";
import Input from "../common/Form/Input";
import Button, { ButtonGroup } from "../common/Button";
import { AiOutlineUser, AiOutlineBell } from "react-icons/ai";

const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
`;
const TopBar = () => {
  return (
    <Formik initialValues={{ search: "" }}>
      {(formik) => (
        <Form>
          <TopBarWrapper>
            <Input name="search" styleType="search" placeholder="Search" />
            <ButtonGroup>
              <Button name="userProfile" styleType="topBar">
                <AiOutlineBell size="1.5rem" />
              </Button>
              <Button name="userProfile" styleType="topBar">
                <AiOutlineUser size="1.5rem" />
              </Button>
            </ButtonGroup>
          </TopBarWrapper>
        </Form>
      )}
    </Formik>
  );
};

export default TopBar;
