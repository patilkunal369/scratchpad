import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useFormikContext } from "formik";

const RichTextBox = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();
  return (
    <CKEditor
      editor={ClassicEditor}
      data={values[name]}
      onChange={(event, editor) => {
        setFieldValue(name, editor.getData());
      }}
    />
  );
};

export default RichTextBox;
