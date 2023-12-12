import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { FontStyle } from "./styles/FontStyle.styles.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FontStyle />
    <App />
  </React.StrictMode>
);
