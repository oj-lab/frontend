import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducer";

// 实例化 store，全局唯一
const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export default store;
