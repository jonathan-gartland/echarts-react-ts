import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import "./global.css"; // Import the global CSS file

const container = document.getElementById("root");
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
