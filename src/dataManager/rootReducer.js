import { combineReducers } from "redux";

// Reducers
import { changeState } from "./coreUiReducer";
import { optionsReducer, formDataReducer, resData } from "./dynamicFormReducer";

export default combineReducers({
  changeState,
  optionsReducer,
  formDataReducer,
  resData,
});
