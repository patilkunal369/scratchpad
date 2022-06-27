import React from "react";
import styled from "styled-components";

const StyledLogo = styled.div`
  margin-bottom: 1.5rem;
  margin-left: 1rem;
  h1 {
    font-family: "cookie";
    font-size: ${(props) => props.size};
    color: var(--secondary);
    text-align: center;
  }
`;
const Logo = ({ size }) => {
  return (
    <StyledLogo size={size}>
      <h1>Scratchpad</h1>
    </StyledLogo>
  );
};

export default Logo;
