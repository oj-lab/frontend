import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch, RootState } from "..";

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 'signedOut'
  },
  reducers: {
    signIn: state => {
      state.value = 'signedIn';
    },
    signOut: state => {
      state.value = 'signedOut';
    }
  }
})

export const { signIn, signOut } = authSlice.actions;

export const authSelector = (state: RootState) => state.auth.value;

export default authSlice.reducer;
