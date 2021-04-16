import { combineReducers } from "redux";

// Reducers
import { changeState } from "./coreUiReducer";
import {
  optionsReducer,
  formDataReducer,
  resultData,
  messageModalReducer,
  secondData,
} from "./dynamicFormReducer";

export default combineReducers({
  changeState,
  optionsReducer,
  formDataReducer,
  resultData,
  messageModalReducer,
  secondData,
});
