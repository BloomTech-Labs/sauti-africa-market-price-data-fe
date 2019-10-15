import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import * as Sentry from "@sentry/browser";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

Sentry.init({
  dsn: "https://ed2c8b82501542498bcdb20ad95bac85@sentry.io/1779492"
});

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
