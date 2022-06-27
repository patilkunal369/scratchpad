import { motion } from "framer-motion";
import styled from "styled-components";

export const TaskWrapper = styled(motion.li)`
  padding: 1rem;
  background-color: white;
  border-radius: 0.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    margin-top: 0.5rem;
    color: var(--neutral_font_light);

    overflow: hidden;

    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
    max-width: 25ch;
  }

  p {
    font-size: 0.8rem;
    max-width: 30ch;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .tags {
    display: flex;
    gap: 0.3rem;
  }
`;
export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0.5rem;
`;
