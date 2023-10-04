import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { worker } from "./mocks/server";

import "./i18n/i18n";
import "./index.css";
import { getMode, isGhPages, isMock } from "./utils/environment";

console.log("Running in:", getMode());
if (isMock()) {
  worker.start();
}
if (isGhPages()) {
  worker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: "/oj-lab-front/mockServiceWorker.js",
    },
  });
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
