import SelectUnstyled from "@mui/base/SelectUnstyled";
import { useFormikContext } from "formik";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { StyledButton, StyledListbox, StyledPopper } from "./Select.styles";

const transition = {
  type: "tween",
  linear: [0.4, 0, 0.2, 1],
  duration: 0.3,
};

export const CustomSelect = React.forwardRef((props, ref) => {
  const components = {
    Root: StyledButton,
    Listbox: StyledListbox,
    Popper: StyledPopper,
    ...props.components,
  };

  const componentProps = {
    listbox: {
      initial: { height: 0, opacity: 0, scale: 0, y: -100, x: -100 },
      animate: { height: "100%", opacity: 1, scale: 1, y: 0, x: 0 },
      exit: { opacity: 0 },
      transition: transition,
    },
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <SelectUnstyled
        {...props}
        ref={ref}
        components={components}
        componentsProps={componentProps}
      />
    </AnimatePresence>
  );
});

const Select = ({ name, children, handleChange }) => {
  const { values } = useFormikContext();
  return (
    <CustomSelect onChange={handleChange} value={values[name]}>
      {children}
    </CustomSelect>
  );
};

export default Select;
