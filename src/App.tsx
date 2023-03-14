import React from "react";
import PageRouter from "./routes/Router";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PageRouter />
    </Provider>
  );
}

export default App;
