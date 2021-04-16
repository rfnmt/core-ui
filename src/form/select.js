import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOptions } from "../dataManager/actions";
import { formData } from "../dataManager/actions";

import { CSelect, CLabel, CCol } from "@coreui/react";

const Select = ({ url, name, label, requeird_data }) => {
  const dispatch = useDispatch();
  const options = useSelector((state) => state.optionsReducer[name]);
  const res = useSelector((state) => state.resData);

  useEffect(() => {
    dispatch(getOptions(url, name));
  }, []);

  return (
    <>
      <CCol xs="5" className="p-3">
        <CLabel htmlFor={name}>{label}</CLabel>
        <CSelect
          custom
          name={name}
          id={name}
          onChange={(e) =>
            dispatch(formData({ [e.target.name]: e.target.value }))
          }
        >
          {/* Check if any result is available,
          then check if the relevant item exists in the result object (the value is a number),
          then get the item in the options object, based on that number minus 1 as the index. */}
          <option value={res && res.data[name] ? res.data[name] : ""}>
            {res && res.data[name] && options[res.data[name] - 1]
              ? options[res.data[name] - 1][requeird_data]
              : "----"}
          </option>
          {options &&
            options !== [] &&
            options.map((item, index) => (
              <option key={item.id} value={index + 1}>
                {item[requeird_data]}
              </option>
            ))}
        </CSelect>
      </CCol>
      <br />
      <br />
    </>
  );
};

export default Select;
