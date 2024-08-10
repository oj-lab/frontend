import { RootState } from ".";

// messageReducer
export const messageMapSelector = (state: RootState) =>
  state.messageReducer.messageMap;

// windowReducer
export const isLightModeSelector = (state: RootState) =>
  state.windowReducer.isLightMode;
export const isDrawerOpenSelector = (state: RootState) =>
  state.windowReducer.isDrawerOpen;

// userReducer
export const userInfoSelector = (state: RootState) => state.userReducer.info;
