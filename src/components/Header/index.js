import React from "react";
import { Form, Formik } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { useCurrentPath } from "../../hooks/useCurrentPathPattern";
import { useSelectedBoardSelector } from "../../store/reducers/selectedBoard";
import Button, { ButtonGroup } from "../common/Button";
import Input from "../common/Form/Input";
import { StyledHeder, TopBarWrapper } from "./Header.styles";
import Options from "./Options";

const Header = () => {
  const { name } = useSelectedBoardSelector();

  const currentPathPattern = useCurrentPath();

  const projectName = () => {
    if (currentPathPattern !== "/board/:id") {
      return "Projects";
    } else return name;
  };

  projectName();
  return (
    <StyledHeder>
      <div className="projectOptions">
        <h1>{projectName()}</h1>
        <Options />
      </div>
      <Formik initialValues={{ search: "" }}>
        {(formik) => (
          <Form>
            <TopBarWrapper>
              <Input name="search" styleType="search" placeholder="Search" />
              <ButtonGroup>
                <Button name="userProfile" styleType="topBar">
                  <AiOutlineUser size="1.5rem" />
                </Button>
              </ButtonGroup>
            </TopBarWrapper>
          </Form>
        )}
      </Formik>
    </StyledHeder>
  );
};

export default Header;
