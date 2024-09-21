import { call, put, takeEvery } from "redux-saga/effects";
import { getCurrentUser } from "@/apis/auth";
import * as UserServiceModel from "@/models/service/user";
import { setUserInfo } from "../slices/user";
import { Action } from "redux";
import { AddMessageSagaPattern } from "./message";

function* getCurrentUserSaga() {
  try {
    const user: UserServiceModel.UserInfo = yield call(getCurrentUser);
    yield put(setUserInfo(user));
  } catch (err) {
    yield put({
      type: AddMessageSagaPattern,
      payload: {
        id: "get-current-user-error",
        content: "UnAuthorized. Please login first.",
        duration: 3000,
        level: "error",
        err: err?.toString(),
      },
    });
  }
}

const GetCurrentUserSagaPattern = "user/getCurrentUser/saga";

export const getCurrentUserAction: Action = {
  type: GetCurrentUserSagaPattern,
};

export function* watchGetUserInfo() {
  yield takeEvery(GetCurrentUserSagaPattern, getCurrentUserSaga);
}
