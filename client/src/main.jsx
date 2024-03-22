import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthContext, AuthContextProvider } from "../context/AuthContext.jsx";
import { CustomProvider } from "rsuite";

import "rsuite/dist/rsuite.min.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        {/* <CustomProvider> */}
        <App />
        {/* </CustomProvider> */}
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
