import { combineReducers } from "@reduxjs/toolkit";
import message from "./slices/message";
import window from "./slices/window";
import user from "./slices/user";

const rootReducers = combineReducers({
  messageReducer: message,
  windowReducer: window,
  userReducer: user,
});

export default rootReducers;
