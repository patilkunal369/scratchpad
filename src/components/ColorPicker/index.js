import React from "react";
import { COLORS } from "../../utils/colors";
import Color from "./Color";
import { ColorPickerWrapper } from "./ColorPicker.styles";

const ColorPicker = ({ name }) => {
  return (
    <ColorPickerWrapper>
      {Object.entries(COLORS).map((color, index) => {
        return <Color color={color[1]} key={index} name={name} />;
      })}
    </ColorPickerWrapper>
  );
};

export default ColorPicker;
