import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = ({apiKey}) => {
  const [data, setData] = useState([]);
  const [err, setErr] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("https://sauti-africa-market-price.herokuapp.com/sauti",
  //     {
  //       headers: {
  //         key: apiKey
  //       }
  //     })
  //     .then(res => {
  //       setData(res.data);
  //     })
  //     .catch(e => console.log(e));
  // }, []);

  const apiCall = () => {
    setErr(false)
    setData([])
    axios
      .get("https://sauti-africa-market-master.herokuapp.com/sauti",
      {
        headers: {
          key: apiKey
        }
      })
      .then(res => {
        setData(res.data)
      })
      .catch(e => {
        console.log({apiCallErr: e})
        setErr(true)
        setData([])
      })
  }

  return (
    <div className="next-steps my-5">
      {data[0]
        ? (
          data.map(entry => {
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
          })
        )
        : (
          err
          ? <div>You've reached the max amount of calls!</div>
          : <div>Make a call!</div>
        )
        }
      
      {apiKey ? <button onClick={apiCall}>Call the api</button> : null}
    </div>
  );
};

export default Content;
