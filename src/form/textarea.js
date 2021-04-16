import React from "react";
import { CLabel, CTextarea, CCol } from "@coreui/react";
import { useDispatch } from "react-redux";
import { formData } from "../dataManager/actions";

const Textarea = ({ name, label, is_required }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CCol xs="11" className="p-3">
        <CLabel htmlFor={name}>{label}</CLabel>
        <CTextarea
          name={name}
          id={name}
          rows="9"
          required={is_required}
          onChange={(e) =>
            dispatch(formData({ [e.target.name]: e.target.value }))
          }
        />
      </CCol>
      <br />
    </>
  );
};

export default Textarea;
