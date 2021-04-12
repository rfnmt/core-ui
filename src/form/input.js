import React from "react";
import { useDispatch } from "react-redux";
import { CLabel, CInput, CFormText } from "@coreui/react";
import { formData } from "../dataManager/actions";

const Input = ({ name, type, label, is_required }) => {
  const dispatch = useDispatch();

  return (
    <>
      <CLabel htmlFor="name">{label}</CLabel>
      <CInput
        required={is_required}
        onInvalid={(e) =>
          e.target.setCustomValidity("لطفا این فیلد را به درستی پر کنید")
        }
        onInput={(e) => e.target.setCustomValidity("")}
        type={type}
        id={name}
        name={name}
        onChange={(e) =>
          dispatch(formData({ [e.target.name]: e.target.value }))
        }
      />
      <br />
    </>
  );
};

export default Input;
