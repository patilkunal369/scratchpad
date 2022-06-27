import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavItemWrapper = styled.li`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.8rem;
  padding: 0.4rem 2rem 0.4rem 1.5rem;
  border-radius: 0 1rem 1rem 0;

  font-size: 1rem;
  margin-bottom: 1rem;
  color: var(--neutral_grey_dark);

  transition: all 0.3s;

  &.selected {
    background-color: rgb(242, 243, 245);
    color: rgb(101, 114, 235);
    /* font-weight: 600; */
  }

  &:hover {
    background-color: var(--neutral_white);
    color: rgb(101, 114, 235);
    cursor: pointer;
  }
`;
const NavItem = ({ icon, label, selected, path }) => {
  return (
    <NavItemWrapper className={selected && "selected"}>
      {icon}
      <Link to={path}>{label}</Link>
    </NavItemWrapper>
  );
};

export default NavItem;
