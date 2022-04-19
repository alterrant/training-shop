import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Router } from "./components/router";
import store from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Router />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
