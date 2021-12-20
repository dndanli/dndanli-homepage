import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: rgba(255, 254, 252);
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
