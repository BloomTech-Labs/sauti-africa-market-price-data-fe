import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactGA from "react-ga";

import { Switch, Route } from "react-router-dom";
import PrivateRoute from "../PrivateRoute/";
import { useAuth, userContext } from "../../hooks/useAuth";
import Login from "../Login/Login";
import Dashboard from "../Dashboard/Dashboard";

import "./App.scss";

/*=== function that initializes Google Analytics ===*/
/*=== https://medium.com/google-cloud/tracking-site-visits-on-react-app-hosted-in-google-cloud-using-google-analytics-f49c2411d398 ===*/

const initializeReactGA = () => {
  ReactGA.initialize("UA-150018840-1");
  ReactGA.pageview("/");
};

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://sauti-africa-market-price.herokuapp.com/sauti")
      .then(res => {
        setData(res.data);
      })
      .catch(e => console.log(e));
  }, []);

  const reducer = useAuth();
  if (reducer.state.initializing) {
    return <h1>Loading...</h1>;
  }

  return (
    <userContext.Provider value={reducer}>
      <Switch>
        <Route exact path="/login" render={props => <Login {...props} />} />
        <PrivateRoute exact path="/dashboard" view={Dashboard} />
        <div className="App">
          <strong>
            <h1>Hello World 😎</h1>
          </strong>
          {data.map(entry => {
            return (
              <>
                <p>ID: {entry.id}</p>
                <p>source: {entry.source}</p>
                <p>country: {entry.country}</p>
                <p>market: {entry.market}</p>
                <p>product_cat: {entry.product_cat}</p>
                <p>product_agg: {entry.product_agg}</p>
                <p>product: {entry.product}</p>
                <p>date: {entry.date}</p>
                <p>
                  retail: ${entry.retail} {entry.currency}
                </p>
                <p>
                  wholesale: ${entry.wholesale} {entry.currency}
                </p>
                <p>unit: {entry.unit}</p>
                <hr />
              </>
            );
          })}
          <button>Break the world</button>
        </div>{" "}
      </Switch>
    </userContext.Provider>
  );
};

export default App;
