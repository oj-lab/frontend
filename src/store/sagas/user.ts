import { call, put, takeEvery } from "redux-saga/effects";
import { getCurrentUser } from "@/apis/auth";
import * as UserServiceModel from "@/models/service/user";
import { setUserInfo } from "../slices/user";
import { Action } from "redux";

function* getCurrentUserSaga() {
  try {
    const user: UserServiceModel.UserInfo = yield call(getCurrentUser);
    yield put(setUserInfo(user));
  } catch (err) {
    console.error(err);
  }
}

const GetCurrentUserSagaPattern = "user/getCurrentUser/saga";

export const getCurrentUserAction: Action = {
  type: GetCurrentUserSagaPattern,
};

export function* watchGetUserInfo() {
  yield takeEvery(GetCurrentUserSagaPattern, getCurrentUserSaga);
}
