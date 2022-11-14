import { setUserState, UserState } from "./authSlice";
import { put, takeEvery } from "redux-saga/effects";
import { USER_SIGN_IN } from "../actions";
import { checkAuth } from "../../services/auth";

function* signInSaga() {
  if (checkAuth()) {
    yield put(setUserState(UserState.SIGNED_IN));
  } else {
    yield put(setUserState(UserState.SIGNED_OUT));
  }
}

export function* watchUserSignIn() {
  yield takeEvery(USER_SIGN_IN, signInSaga);
}
