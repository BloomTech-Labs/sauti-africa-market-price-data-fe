import React from "react";
import ReactGA from "react-ga";
//import auth from './auth.js'; // Sample authentication provider

import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/";
import { useAuth, userContext } from "../../hooks/useAuth";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

import "./App.scss";

const trackingId = process.env.GOOGLE_ID; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

/*ReactGA.set({
  userId: auth.currentUserId()
  // any data that is relevant to the user session
  // that you would like to track with google analytics
});*/

const App = () => {
  const reducer = useAuth();
  if (reducer.state.initializing) {
    return <h1>Loading...</h1>;
  }
  return (
    <userContext.Provider value={reducer}>
      <div className="App">
        <Switch>
          <Route exact path="/login" render={props => <Login {...props} />} />
          <PrivateRoute exact path="/dashboard" view={Dashboard} />
        </Switch>
        <p>Hello World 😎</p>
      </div>
    </userContext.Provider>
  );
};

export default App;
