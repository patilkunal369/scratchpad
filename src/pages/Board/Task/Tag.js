import React from "react";
import styled from "styled-components";
const TagWrapper = styled.div`
  font-size: 0.6rem;
  color: var(--neutral_light_grey);
  background-color: ${(props) =>
    props.color ? props.color : "var(--secondary)"};
  border-radius: 1rem;

  width: max-content;
  padding: 0.2rem 0.4rem;
  font-weight: 700;
  text-indent: 0;
`;

const Tag = ({ label, color }) => {
  return <TagWrapper color={color}>{label}</TagWrapper>;
};

export default Tag;
