import { call, put, takeEvery } from "redux-saga/effects";
import { getCurrentUser } from "@/apis/auth";
import * as UserServiceModel from "@/models/service/user";
import { setUserInfo } from "../slices/user";
import { Action } from "redux";

function* getCurrentUserSaga() {
  const user: UserServiceModel.UserInfo = yield call(getCurrentUser);
  yield put(setUserInfo(user));
}

const GetCurrentUserSagaPattern = "user/getCurrentUser/saga";

export const getCurrentUserAction: Action = {
  type: GetCurrentUserSagaPattern,
};

export function* watchGetUserInfo() {
  yield takeEvery(GetCurrentUserSagaPattern, getCurrentUserSaga);
}
