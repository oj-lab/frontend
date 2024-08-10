import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "@/reportWebVitals";
import { Provider } from "react-redux";
import App from "@/App";
import "@/i18n/module";
import "@/Index.css";
import { getViteMode, isGhPages, isMock } from "@/utils/environment";
import store from "@/store";

console.log("Running in:", getViteMode());

async function enableMockService() {
  if (!isMock() && !isGhPages()) {
    return;
  }

  const { mockServiceWorker } = await import("./mocks/worker");

  let workerURL = "/mockServiceWorker.js";
  if (isGhPages()) {
    workerURL = "/oj-lab-front/mockServiceWorker.js";
  }

  return mockServiceWorker.start({
    onUnhandledRequest: "bypass",
    serviceWorker: {
      url: workerURL,
    },
  });
}

enableMockService().then(() => {
  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement,
  );

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
  );
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
