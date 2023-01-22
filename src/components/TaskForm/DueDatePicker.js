import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useFormikContext } from "formik";
import moment from "moment";

const DueDatePicker = () => {
  const { setFieldValue, values } = useFormikContext();
  const [value, setValue] = useState(values["dueDate"] || new Date());
  return (
    <div>
      <p>Due Date</p>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DesktopDatePicker
          value={value}
          minDate={new Date()}
          inputFormat="MM/dd/yyyy"
          onChange={(newValue) => {
            setValue(newValue);
            setFieldValue("dueDate", moment(newValue).format("L"));
          }}
          renderInput={(params) => <TextField {...params} size="small" />}
        />
      </LocalizationProvider>
    </div>
  );
};

export default DueDatePicker;
