import React from "react";
import ReactDOM from "react-dom";
import * as Sentry from "@sentry/browser";

import "./index.scss";
import * as serviceWorker from "./serviceWorker";

import App from "./components/App";

import * as serviceWorker from "./serviceWorker";

Sentry.init({
  dsn: "https://ed2c8b82501542498bcdb20ad95bac85@sentry.io/1779492"
});

<<<<<<< HEAD
ReactDOM.render(
  <Router history={history}>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      client_id={process.env.REACT_APP_CLIENT_ID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUDIENCE}
      response_type="token id_token"
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById("root")
);
=======
ReactDOM.render(<App />, document.getElementById("root"));
>>>>>>> 2182303ee503ddad826cc6779d663368793de6a8

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();