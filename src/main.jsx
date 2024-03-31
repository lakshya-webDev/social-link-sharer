import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import { WebRoutes } from "./routes";

// Use ReactDOM.createRoot to render the app
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <WebRoutes />
  </BrowserRouter>
);
