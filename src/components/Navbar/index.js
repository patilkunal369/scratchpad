import React from "react";
import Logo from "./Logo";

import NavItem from "./NavItem";
import { NavList } from "./NavList";
import styled from "styled-components";
import { Form, Formik } from "formik";
import { AnimatePresence, motion } from "framer-motion";

export const NavbarWrapper = styled(motion.nav)`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 1rem 0;
  grid-row: 1/4;
  gap: 1rem;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  background-color: white;
`;

const Navbar = () => {
  const navbarVariants = {
    initial: { x: -100 },
    animate: { x: 0 },
    exit: { opacity: 0 },
  };
  return (
    <NavbarWrapper
      variants={navbarVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <Logo size="3rem" />
      <ul>
        {NavList.map(({ icon, label, selected, path }, index) => {
          return (
            <NavItem
              key={index}
              icon={icon}
              label={label}
              selected={selected}
              path={path}
            />
          );
        })}
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
