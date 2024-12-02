import { React, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CounterApp from "./components/counter";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <CounterApp />
  </StrictMode>
);
