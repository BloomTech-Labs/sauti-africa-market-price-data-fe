import React from "react";
import ReactGA from "react-ga";
//import auth from './auth.js'; // Sample authentication provider

import "./App.scss";

const trackingId = process.env.GOOGLE_ID; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

/*ReactGA.set({
  userId: auth.currentUserId()
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});*/

const App = () => (
  <div className="App">
    <p>Hello World 😎</p>
  </div>
);

export default App;
