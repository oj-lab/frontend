import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface WindowState {
  isLightMode: boolean;
  isDrawerOpen: boolean;
}

const initialState: WindowState = {
  isLightMode: true,
  isDrawerOpen: false,
};

const windowSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setIsLightMode(state, action: PayloadAction<boolean>) {
      state.isLightMode = action.payload;
    },
    setIsDrawerOpen(state, action: PayloadAction<boolean>) {
      state.isDrawerOpen = action.payload;
    },
  },
});

export const { setIsLightMode, setIsDrawerOpen } = windowSlice.actions;

export default windowSlice.reducer;
