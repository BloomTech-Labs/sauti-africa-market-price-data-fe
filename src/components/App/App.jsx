import React from "react";
import ReactGA from "react-ga";
//import auth from './auth.js'; // Sample authentication provider

import "./App.scss";

const App = () => {
  const trackingId = "UA-149875613-1"; // Replace with your Google Analytics tracking ID

  ReactGA.initialize(trackingId);
  /*ReactGA.set({
    userId: auth.currentUserId()
    // any data that is relevant to the user session
    // that you would like to track with google analytics
  });*/

  return (
    <div className="App">
      <p>Hello World 😎</p>
    </div>
  );
};

export default App;
