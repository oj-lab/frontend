import { combineReducers } from "@reduxjs/toolkit";
import authSlice from "./auth/authSlice";

const rootReducers = combineReducers({
  auth: authSlice,
});

export default rootReducers;
