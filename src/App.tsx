import React from "react";
import PageRouter from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <PageRouter />
      </NextUIProvider>
    </Provider>
  );
}

export default App;
