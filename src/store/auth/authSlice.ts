import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";

export enum UserState {
  SIGNED_IN = "signedIn",
  SIGNED_OUT = "signedOut",
}
export interface AuthState {
  userState: UserState;
}

const initialState: AuthState = {
  userState: UserState.SIGNED_IN,
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

export const { setUserState } = authSlice.actions;

export const userStateSelector = (state: RootState): UserState =>
  state.auth.userState;

export default authSlice.reducer;
