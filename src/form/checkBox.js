import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { CSwitch, CCol } from "@coreui/react";
import { formData } from "../dataManager/actions";

const CheckBox = ({ name, label }) => {
  const [value, setValue] = useState(false);
  const dispatch = useDispatch();
  const change = (e) => {
    setValue(value ? false : true);
    dispatch(formData({ [e.target.name]: e.target.value }));
  };

  return (
    <div className="d-flex align-items-center mb-4">
      <CCol tag="label" sm="1" className="col-form-label">
        {label}
      </CCol>
      <CSwitch
        className="mr-1"
        color="primary"
        name={name}
        onChange={change}
        defaultChecked
        value={value}
      />
      <br />
      <br />
    </div>
  );
};

export default CheckBox;
