import React from "react";
import logo from "./logo.svg";
import PageRouter from './routes/Router';
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

function App() {
  store.subscribe(() => console.log(store.getState()));
  return (
    <Provider store={store}>
      <PageRouter />
    </Provider>
  );
}

export default App;
