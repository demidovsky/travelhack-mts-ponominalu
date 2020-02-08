import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { ThemeProvider } from "styled-components";
import { CRouter } from "./CRouter";

const theme = {};

console.log("currentTheme:", theme);

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CRouter />
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
