import { all, call, spawn } from "redux-saga/effects";
import { watchAddMessage, watchRemoveMessage } from "./sagas/message";
import { watchGetUserInfo } from "./sagas/user";

export default function* rootSaga() {
  let sagas = [watchAddMessage, watchRemoveMessage, watchGetUserInfo];

  // Spawn a detached generater for each 'watcher' saga, that is meant to stay alive for the entire app life-time
  // Will catch any otherwise uncaught errors in sagas, and restart those crashed sagas.
  yield all(
    sagas.map((saga) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.log(e);
          }
        }
      }),
    ),
  );
}
