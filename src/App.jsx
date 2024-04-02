import React from "react";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { WebRoutes } from "./routes";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <WebRoutes />
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
