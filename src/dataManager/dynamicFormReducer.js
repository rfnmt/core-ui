// Actions Types
import { SET_OPTIONS, GET_FORM_DATA, GET_RESPONSE } from "./actionTypes";

const initialOptions = {};

const optionsReducer = (state = initialOptions, action) => {
  switch (action.type) {
    case SET_OPTIONS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const initilFormData = {};

const formDataReducer = (state = initilFormData, action) => {
  switch (action.type) {
    case GET_FORM_DATA:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
};

const initRes = {};

const resData = (state = initRes, action) => {
  switch (action.type) {
    case GET_RESPONSE:
      return action.payload;
    default:
      return state;
  }
};

export { optionsReducer, formDataReducer, resData };
