import { combineReducers } from "@reduxjs/toolkit";
import message from "./slices/message";

const rootReducers = combineReducers({
  messageReducer: message,
});

export default rootReducers;
