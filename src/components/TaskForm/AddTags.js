import React from "react";
import Box from "@mui/material/Box";
import Tag from "../../pages/Board/Task/Tag";
import { useSelectedBoardSelector } from "../../store/reducers/selectedBoard";
import Color from "../ColorPicker/Color";
import Button from "../common/Button";
import MultiSelect from "../common/Form/MultiSelect";
import { StyledOption } from "../common/Form/Select/Select.styles";
import { useFormikContext } from "formik";

export default function AddTags() {
  const { tagList } = useSelectedBoardSelector();

  const {
    values: { tags },
  } = useFormikContext();

  const renderValue = (selected) => {
    return (
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
        {selected.length === 0 && "Select tag"}
        {selected.map(({ value }, index) => {
          const [tabLabel, tagValue, color] = value.split("|");
          return <Tag label={tabLabel} key={index} color={color} />;
        })}
      </Box>
    );
  };

  return (
    <div style={{ gridColumn: "1 / 3" }}>
      <MultiSelect
        label="Tags"
        name="tags"
        renderValue={renderValue}
        defaultValue={tags}
      >
        <Button
          styleType="secondary"
          text="Create tag"
          style={{ width: "100%", marginBottom: ".5rem" }}
        />
        {tagList.map(({ label, value, color, selected }, index) => (
          <StyledOption key={index} value={`${label}|${value}|${color}`}>
            {/* passed as string because object was not working */}

            <Color color={color} />
            {label}
          </StyledOption>
        ))}
      </MultiSelect>
    </div>
  );
}
