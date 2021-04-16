import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CLabel, CInput, CCol } from "@coreui/react";
import { formData } from "../dataManager/actions";

const Input = ({ name, type, label, isRequired, isDisabled }) => {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.resData);

  return (
    <>
      <CCol xs="5" className="p-3">
        <CLabel htmlFor="name">{label}</CLabel>
        <CInput
          disabled={isDisabled}
          required={isRequired}
          onInvalid={(e) =>
            e.target.setCustomValidity("لطفا این فیلد را به درستی پر کنید")
          }
          onInput={(e) => e.target.setCustomValidity("")}
          type={type}
          id={name}
          name={name}
          defaultValue={res ? res.data[name] : ""}
          onChange={(e) =>
            dispatch(formData({ [e.target.name]: e.target.value }))
          }
        />
      </CCol>
      <br />
    </>
  );
};

export default Input;
