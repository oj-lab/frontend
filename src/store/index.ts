import { configureStore, Middleware } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import rootReducers from "./reducer";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();
const middlewares: Middleware[] = [sagaMiddleware];
// Enable this logger in dev ENV
middlewares.push(logger);

const store = configureStore({
  reducer: rootReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...middlewares),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
