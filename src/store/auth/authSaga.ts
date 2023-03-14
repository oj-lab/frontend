import { setCurrentUser, setUserState, UserState } from "./authSlice";
import { put, takeEvery } from "redux-saga/effects";
import { GET_CURRENT_USER, USER_SIGN_IN } from "../actions";
import { login, getCurrentUser, UserResponse } from "../../services/login";
import { PayloadAction } from "@reduxjs/toolkit";

export interface SignInPayload {
  account: string;
  password: string;
}

function* signInSaga(action: PayloadAction<SignInPayload>) {
  try {
    const { account, password } = action.payload;
    yield login(account, password);

    yield put(setUserState(UserState.SIGNED_IN));
  } catch (err) {
    put(setUserState(UserState.SIGNED_OUT));
    // TODO: Handle this kind of service err in a shared error handler
    console.log(err);
  }
}

function* getCurrentUserSaga() {
  console.log("get current user");
  try {
    yield put(setUserState(UserState.LOADING));
    const response: UserResponse = yield getCurrentUser();

    yield put(setUserState(UserState.SIGNED_IN));
    yield put(
      setCurrentUser({
        username: response.username,
        roles: response.roles,
      })
    );
  } catch (err) {
    yield put(setUserState(UserState.SIGNED_OUT));
    yield put(setCurrentUser(undefined));
    // TODO: Handle this kind of service err in a shared error handler
    console.log(err);
  }
}

export function* watchUserSignIn() {
  yield takeEvery(USER_SIGN_IN, signInSaga);
}

export function* watchGetCurrentUser() {
  yield takeEvery(GET_CURRENT_USER, getCurrentUserSaga);
}
