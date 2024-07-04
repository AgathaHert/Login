import React from "react";
import ReactDOM from "react-dom/client";
import GlobalStyle from "./global";
import Login from "./pages/Login";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Login />
  </React.StrictMode>
);
