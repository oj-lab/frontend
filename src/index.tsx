import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "./i18n/i18n";
import "./index.css";
import { getMode, isGhPages, isMock } from "./utils/environment";

console.log("Running in:", getMode());

async function enableMocking() {
  if (!isMock() && !isGhPages()) {
    return;
  }

  const { worker } = await import("./mocks/server");

  if (isMock()) {
    return worker.start({
      onUnhandledRequest: "bypass",
    });
  }
  if (isGhPages()) {
    return worker.start({
      onUnhandledRequest: "bypass",
      serviceWorker: {
        url: "/oj-lab-front/mockServiceWorker.js",
      },
    });
  }
}

enableMocking().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
