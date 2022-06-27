import styled from "styled-components";

export const ColorPickerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  align-items: center;
`;

export const StyledColor = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  min-width: 1rem;
  height: 1rem;

  border: 0px solid var(--neutral_light_grey);
  &:hover {
    cursor: pointer;
    border: 0px solid var(--neutral_light_grey);
  }

  &.selected {
    border: 5px solid var(--neutral_light_grey);
  }
`;
