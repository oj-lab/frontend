import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { USER_SIGN_IN } from "../actions";

export enum UserState {
  SIGNED_IN = "signedIn",
  SIGNED_OUT = "signedOut",
}
export interface AuthState {
  userState: UserState;
}

const initialState: AuthState = {
  userState: UserState.SIGNED_OUT,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      state.userState = action.payload;
    },
  },
});

export const userStateSelector = (state: RootState): UserState =>
  state.auth.userState;

export const { setUserState } = authSlice.actions;

export const userSignIn = createAction<void>(USER_SIGN_IN);

export default authSlice.reducer;
