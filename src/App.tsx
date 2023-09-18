import PageRouter from "./routes/Router";
import "./App.css";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <PageRouter />
    </NextUIProvider>
  );
}

export default App;
