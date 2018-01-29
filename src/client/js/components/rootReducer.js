import { combineReducers } from "redux";

import authenticationReducer from "../services/authentication/authenticationReducer";

export default combineReducers({
  authentication: authenticationReducer
});