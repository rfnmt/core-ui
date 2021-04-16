import store from "./store";
import axios from "axios";
import {
  SET_OPTIONS,
  GET_FORM_DATA,
  GET_RESPONSE,
  MESSAGE_MODAL,
  GET_MESSAGE_RES,
} from "./actionTypes";

let protocol = process.env.REACT_APP_PROTOCOL;

const getOptions = (url, name) => {
  return function (dispatch) {
    if (protocol == 1) {
      return axios
        .get(`${process.env.REACT_APP_BASE_URL}${url}`)
        .then((res) => {
          dispatch(setOptions(res.data, name));
        });
    }
    return;
  };
};

const setOptions = (data, name) => {
  const dataPayload = data.results ? data.results : data;
  return {
    type: SET_OPTIONS,
    payload: { [name]: [...dataPayload] },
  };
};

const formData = (inputData) => {
  return {
    type: GET_FORM_DATA,
    payload: inputData,
  };
};

const postFormData = (data, url, requires) => {
  return function (dispatch) {
    if (protocol == 1) {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}${url[0]}`, data)
        .then((result) => dispatch(getResponse({ ...data, ...result.data })))
        .then(() => {
          if (url[1]) {
            const secondData = setRequiredData(requires[1]);

            return axios.post(
              `${process.env.REACT_APP_BASE_URL}${url[1]}`,
              secondData
            );
          }
        })
        .then((result) => dispatch(secondRes(result.data)))

        .catch((e) => console.log(e));
    }
    return;
  };
};

const setRequiredData = (requiredData) => {
  let allData = store.getState().resultData.data;
  console.log(allData);
  let secondData = {};
  requiredData.forEach((item) => {
    let key = Object.keys(item);
    let value = Object.values(item);
    Object.assign(secondData, { [key]: allData[value] });
  });

  return secondData;
};

const getResponse = (data) => {
  return {
    type: GET_RESPONSE,
    payload: { data },
  };
};

const secondRes = (data) => {
  return {
    type: GET_MESSAGE_RES,
    payload: { data },
  };
};

// const redirectAfterSubmit = (answer) => {
//   return {
//     type: REDIRECT_AFTER_SUBMIT,
//     payload: answer,
//   };
// };

// const postMessage = (data, url) => {
//   return function (dispatch) {
//     if (protocol == 1) {
//       axios
//         .post(`${process.env.REACT_APP_BASE_URL}${url}`, data)
//         .then(() => dispatch(showMessageModal(true)))
//         .then(() => dispatch(formData({})))
//         .catch((e) => console.log(e));
//     }
//     return;
//   };
// };

const showMessageModal = (answer) => {
  return {
    type: MESSAGE_MODAL,
    payload: answer,
  };
};

export {
  getOptions,
  setOptions,
  formData,
  postFormData,
  getResponse,
  showMessageModal,
};
