import styled from "styled-components";

export const SubTasksWrapper = styled.div`
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 0.5rem;
  p {
    font-weight: 450;
    font-size: 1.3rem;
    margin-bottom: 0.5rem;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const SubTaskListWrapper = styled.ul`
  padding-top: 0.5rem;
  overflow-y: auto;
  max-height: 125px;
`;

export const SubTaskWrapper = styled.li`
  border-bottom: 3px solid var(--neutral_light_grey);
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem;
`;
