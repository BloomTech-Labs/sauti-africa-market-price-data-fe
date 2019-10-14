import React from "react";
import ReactGA from "react-ga";

import "./App.scss";

/*=== function that initializes Google Analytics ===*/
/*=== https://medium.com/google-cloud/tracking-site-visits-on-react-app-hosted-in-google-cloud-using-google-analytics-f49c2411d398 ===*/

const initializeReactGA = () => {
  ReactGA.initialize("UA-150018840-1");
  ReactGA.pageview("/");
};

const App = () => (
  <div className="App">
    <p>Hello World 😎</p>
    <button onClick={methodDoesNotExist}>Break the world</button>
  </div>
);

export default App;
