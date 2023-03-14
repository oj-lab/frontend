import { createAction, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "..";
import { GET_CURRENT_USER, USER_SIGN_IN } from "../actions";
import { SignInPayload } from "./authSaga";

export enum UserState {
  SIGNED_IN = "signedIn",
  SIGNED_OUT = "signedOut",
  LOADING = "loading",
}

export interface User {
  username: string;
  roles: string[];
}

export interface AuthState {
  userState: UserState;
  currentUser: User | undefined;
}

const initialState: AuthState = {
  // The loading state is used to indicate that the app is checking if the user is signed in or not
  userState: UserState.LOADING,
  currentUser: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserState(state, action: PayloadAction<UserState>) {
      state.userState = action.payload;
    },
    setCurrentUser(state, action: PayloadAction<User | undefined>) {
      state.currentUser = action.payload;
    },
  },
});

export const userStateSelector = (state: RootState): UserState =>
  state.auth.userState;
export const currentUserSelector = (state: RootState): User | undefined =>
  state.auth.currentUser;

export const { setUserState, setCurrentUser } = authSlice.actions;

export const userSignIn = createAction<SignInPayload>(USER_SIGN_IN);
export const getCurrentUser = createAction<void>(GET_CURRENT_USER);

export default authSlice.reducer;
