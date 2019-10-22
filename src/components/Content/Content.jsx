import React, { useState, useEffect } from "react";
import axios from "axios";

const Content = () => {
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
    <div className="next-steps my-5">
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
    </div>
  );
};

export default Content;
