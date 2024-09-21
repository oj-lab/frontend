import { PayloadAction } from "@reduxjs/toolkit";
import {
  Message,
  addMessage,
  removeMessage,
  setMessageExiting,
} from "../slices/message";
import { put, takeEvery } from "redux-saga/effects";
import { v4 as uuidv4 } from "uuid";

function* addMessageSaga(action: PayloadAction<Message>) {
  action.payload.id = action.payload.id || uuidv4();
  yield put(addMessage(action.payload));
  // Remove the message after the duration
  yield new Promise((resolve) => setTimeout(resolve, action.payload.duration));
  yield put(setMessageExiting(action.payload.id));
  yield new Promise((resolve) => setTimeout(resolve, 250));
  yield put(removeMessage(action.payload.id));
}

function* removeMessageSaga(action: PayloadAction<string>) {
  yield put(setMessageExiting(action.payload));
  yield new Promise((resolve) => setTimeout(resolve, 250));
  yield put(removeMessage(action.payload));
}

export const AddMessageSagaPattern = "message/addMessage/saga";
export const RemoveMessageSagaPattern = "message/removeMessage/saga";

export function* watchAddMessage() {
  yield takeEvery(AddMessageSagaPattern, addMessageSaga);
}

export function* watchRemoveMessage() {
  yield takeEvery(RemoveMessageSagaPattern, removeMessageSaga);
}
