import { PopperUnstyled } from "@mui/base";
import OptionUnstyled, {
  optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import { selectUnstyledClasses } from "@mui/base/SelectUnstyled";
import { motion } from "framer-motion";
import styled from "styled-components";

export const blue = {
  100: "#DAECFF",
  200: "#99CCF3",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  900: "#003A75",
};

export const grey = {
  100: "#E7EBF0",
  200: "#E0E3E7",
  300: "#CDD2D7",
  400: "#B2BAC2",
  500: "#A0AAB4",
  600: "#6F7E8C",
  700: "#3E5060",
  800: "#2D3843",
  900: "#1A2027",
};

export const StyledButton = styled(motion.button)`
  font-size: 1rem;
  background-color: white;
  border: 1px solid ${grey[300]};
  border-radius: 4px;
  padding: 0.5rem;
  text-align: left;
  text-indent: 0.5rem;
  width: 100%;

  display: flex;
  align-items: center;

  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &:hover {
    background: ${grey[100]};
    cursor: pointer;
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: "▴";
      margin-left: auto;
    }
  }

  &::after {
    content: "▾";
    margin-left: auto;
  }
`;

export const StyledListbox = styled(motion.ul)`
  padding: 0.3rem;
  width: 300px;
  max-height: 150px;
  background-color: white;
  border-radius: 0.75em;
  color: ${grey[900]};
  overflow: auto;
  outline: 0px;
  border: 1px solid ${grey[300]};

  z-index: 999999;
`;

export const StyledOption = styled(motion(OptionUnstyled))`
  padding: 0.3rem;
  border-radius: 0.3rem;
  padding-left: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;

  gap: 0.5rem;
  margin-bottom: 0.5rem;

  &.${optionUnstyledClasses.selected} {
    background-color: ${grey[100]};
    color: ${blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${grey[100]};
    color: ${grey[900]};
  }
`;

export const StyledPopper = styled(motion(PopperUnstyled))`
  z-index: 999;
  width: inherit;
`;
