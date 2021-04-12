import axios from "axios";
import { SET_OPTIONS, GET_FORM_DATA, GET_RESPONSE } from "./actionTypes";

let protocol = process.env.REACT_APP_PROTOCOL;

const getOptions = (url, name) => {
  return function (dispatch) {
    if (protocol == 1) {
      return axios
        .get(`${process.env.REACT_APP_BASE_URL}${url}`)
        .then((res) => {
          dispatch(setOptions(res.data.results, name));
        });
    }
    return;
  };
};

const setOptions = (data, name) => {
  return {
    type: SET_OPTIONS,
    payload: { [name]: data },
  };
};

const formData = (inputData) => {
  return {
    type: GET_FORM_DATA,
    payload: inputData,
  };
};

const postFormData = (data, url) => {
  return function (dispatch) {
    if (protocol == 1) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}${url}`, { data })
        .then((res) => dispatch(setOptions(res.data)));
    }
    return;
  };
};

const getResponse = (data) => {
  return {
    type: GET_RESPONSE,
    payload: data,
  };
};

export { getOptions, setOptions, formData, postFormData, getResponse };
