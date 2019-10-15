import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactGA from "react-ga";

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

  return (
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
    </div>
  );
};


export default App;
