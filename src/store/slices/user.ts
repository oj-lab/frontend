import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import * as UserServiceModel from "@/models/service/user";

export interface UserState {
  info?: UserServiceModel.UserInfo;
}

const initialState: UserState = {
  info: undefined,
};

const userSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setInfo(state, action: PayloadAction<UserServiceModel.UserInfo>) {
      state.info = action.payload;
    },
  },
});

export const { setInfo: setUserInfo } = userSlice.actions;

export default userSlice.reducer;
