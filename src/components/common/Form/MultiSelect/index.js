import MultiSelectUnstyled from "@mui/base/MultiSelectUnstyled";
import { useFormikContext } from "formik";
import { AnimatePresence } from "framer-motion";
import React from "react";
import {
  StyledButton,
  StyledListbox,
  StyledPopper,
} from "../Select/Select.styles";

const transition = {
  type: "tween",
  linear: [0.4, 0, 0.2, 1],
  duration: 0.3,
};

const CustomMultiSelect = React.forwardRef((props, ref) => {
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
      <MultiSelectUnstyled
        {...props}
        ref={ref}
        components={components}
        componentsProps={componentProps}
        renderValue={props.renderValue}
      />
    </AnimatePresence>
  );
});

const MultiSelect = ({ label, name, renderValue, children, defaultValue }) => {
  const { setFieldValue } = useFormikContext();

  return (
    <div style={{ gridColumn: "1 / 3" }}>
      <p>{label}</p>
      <CustomMultiSelect
        onChange={(value) => setFieldValue(name, value)}
        style={{ display: "flex", justifyContent: "space-between" }}
        renderValue={renderValue}
        value={defaultValue}
      >
        {children}
      </CustomMultiSelect>
    </div>
  );
};

export default MultiSelect;
