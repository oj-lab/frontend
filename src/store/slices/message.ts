import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "..";

export interface Message {
  id: string;
  content: string;
  exiting?: boolean;
  duration: number;
}

export interface MessageState {
  messageMap: { [key: string]: Message };
}

const initialState: MessageState = {
  messageMap: {},
};

const messageSlice = createSlice({
  name: "message",
  initialState,
  reducers: {
    addMessage(state, action: PayloadAction<Message>) {
      let addingMessage = action.payload;
      state.messageMap[addingMessage.id] = addingMessage;
    },
    setMessageExiting(state, action: PayloadAction<string>) {
      let exitingMessage = state.messageMap[action.payload];
      if (exitingMessage) {
        exitingMessage.exiting = true;
      }
    },
    removeMessage(state, action: PayloadAction<string>) {
      delete state.messageMap[action.payload];
    },
  },
});

export const messageMapSelector = (state: RootState) =>
  state.messageReducer.messageMap;

export const { addMessage, setMessageExiting, removeMessage } =
  messageSlice.actions;

export default messageSlice.reducer;
