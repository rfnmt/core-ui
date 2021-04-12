import React from "react";
import { CLabel, CTextarea } from "@coreui/react";

const Textarea = ({ name, label, is_required }) => {
  return (
    <>
      <CLabel htmlFor={name}>{label}</CLabel>
      <CTextarea name={name} id={name} rows="9" />
      <br />
    </>
  );
};

export default Textarea;
