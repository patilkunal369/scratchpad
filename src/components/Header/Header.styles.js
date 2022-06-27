import styled from "styled-components";
export const StyledHeder = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  h1 {
    color: var(--neutral_font);
  }

  .projectOptions {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const TopBarWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
