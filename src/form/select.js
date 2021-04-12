import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOptions } from "../dataManager/actions";
import { formData } from "../dataManager/actions";
import axios from "axios";

import { CSelect, CLabel } from "@coreui/react";

const Select = ({ url, name, label, requeird_data }) => {
  // const [data, setData] = useState("");
  // const [options, setOptions] = useState("");

  const dispatch = useDispatch();

  useEffect(() => {
    // axios
    //   .get(`${process.env.REACT_APP_BASE_URL}${url}`)
    //   .then((res) => setData(res.data.results));
    dispatch(getOptions(url, name));
  }, []);

  const options = useSelector((state) => state.optionsReducer[name]);

  return (
    <>
      <CLabel htmlFor={name}>{label}</CLabel>
      <CSelect
        custom
        name={name}
        id={name}
        onChange={(e) =>
          dispatch(formData({ [e.target.name]: e.target.value }))
        }
      >
        <option value="">-----</option>
        {/* {options && options !== [] ? options : null} */}
        {options &&
          options !== [] &&
          options.map((item, index) => (
            <option key={index} value={index + 1}>
              {item[requeird_data]}
            </option>
          ))}
      </CSelect>
      <br />
      <br />
    </>
  );
};

export default Select;
