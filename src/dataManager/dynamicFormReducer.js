// Actions Types
import {
  SET_OPTIONS,
  GET_FORM_DATA,
  GET_RESPONSE,
  MESSAGE_MODAL,
  GET_MESSAGE_RES,
} from "./actionTypes";

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

const initResult = "";

const resultData = (state = initResult, action) => {
  switch (action.type) {
    case GET_RESPONSE:
      return action.payload;
    default:
      return state;
  }
};

const initSecondRes = "";

const secondData = (state = initSecondRes, action) => {
  switch (action.type) {
    case GET_MESSAGE_RES:
      return action.payload;
    default:
      return state;
  }
};

// const redirect = false;

// const redirectReducer = (state = redirect, action) => {
//   switch (action.type) {
//     case REDIRECT_AFTER_SUBMIT:
//       return action.payload;
//     default:
//       return state;
//   }
// };

const showModal = false;

const messageModalReducer = (state = showModal, action) => {
  switch (action.type) {
    case MESSAGE_MODAL:
      return action.payload;
    default:
      return state;
  }
};

export {
  optionsReducer,
  formDataReducer,
  resultData,
  messageModalReducer,
  secondData,
};
