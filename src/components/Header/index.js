import React from "react";
import { Form, Formik } from "formik";
import { AiOutlineUser } from "react-icons/ai";
import { useCurrentPath } from "../../hooks/useCurrentPathPattern";
import { useSelectedBoardSelector } from "../../store/reducers/selectedBoard";
import Button, { ButtonGroup } from "../common/Button";
import Input from "../common/Form/Input";
import { StyledHeder, TopBarWrapper } from "./Header.styles";
import Options from "./Options";
import Assignee from "../Assignee";
import ProjectMembers from "./ProjectMembers";

const Header = () => {
  const { name, members } = useSelectedBoardSelector();

  const currentPathPattern = useCurrentPath();

  const projectName = () => {
    if (currentPathPattern !== "/board/:id") {
      return "Projects";
    } else return name;
  };

  return (
    <header>
      <StyledHeder>
        <div className="projectOptions">
          <h1>{projectName()}</h1>
          {name && <Options />}
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
      {name && <ProjectMembers members={members} />}
    </header>
  );
};

export default Header;
