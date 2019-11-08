import React, { useReducer, useState } from "react";
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { AgGridReact } from "ag-grid-react";
// import DataGrid from '../DataGrid'
import useGetToken from "../../hooks/useGetToken";

import { GridContext } from "../../contexts";
import { initialState, reducer } from "../../store";

import { Dropdown, Button, Form } from "semantic-ui-react";

import {
  currencyOptions,
  countriesOptions,
  marketOptions,
  productOptions,
  handleCountries,
  handleMarkets,
  handleProducts
} from "../../config/gridDropdown";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

const Grid = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const { columnDefs, rowData, gridStyle } = store;
  const [err, setErr] = useState(false);
  const [next, setNext] = useState([]);
  const [prev, setPrev] = useState([]);
  const [count, setCount] = useState(null);
  const [page, setPage] = useState(null);
  const [countryQuery, setCountryQuery] = useState();
  const [marketQuery, setMarketQuery] = useState();
  const [productQuery, setProductQuery] = useState();
  const [countries, setCountries] = useState([]);
  const [markets, setMarkets] = useState([]);
  const [products, setProducts] = useState([]);
  const [currency, setCurrency] = useState();
  const [token] = useGetToken();
  const [exportCSV, setExportCSV] = useState(null);

  const onGridReady = params => {
    params.api.sizeColumnsToFit();
    setExportCSV(params.api);
  };

  const nextApiCall = async () => {
    setErr(false);
    let nextCursor = null;
    let n = next[next.length - 1];
    if (next) nextCursor = n;
    let q = `http://localhost:8888/sauti/client/?currency=${currency ||
      "USD"}${countryQuery || ""}${marketQuery || ""}${productQuery ||
      ""}&next=${nextCursor}`;
    console.log({ QUERY: q });
    axiosWithAuth([token])
      .get(
        `http://localhost:8888/sauti/client/?currency=${currency ||
          "USD"}${countryQuery || ""}${marketQuery || ""}${productQuery ||
          ""}&next=${nextCursor}`
      )
      .then(async res => {
        dispatch({ type: "SET_ROW_DATA", payload: res.data.records });
        const p = page;
        const currentPage = typeof p === "number" ? p + 1 : 1;

        await setPrev([...prev, res.data.prev]);
        await setNext([...next, res.data.next]);
        await setPage(currentPage);
      })
      .catch(e => {
        console.log({ apiCallErr: e });
        setErr(true);
      });
  };

  const prevApiCall = async () => {
    setErr(false);
    let p = page;
    const currentPage = typeof p === "number" && p > 1 ? p - 1 : 1;
    await setPage(currentPage);
    let nextCursor = null;
    let nextPage = null;
    if (prev && page) nextPage = prev[page - 2];
    if (nextPage) nextCursor = nextPage;
    let q = `http://localhost:8888/sauti/client/?currency=${currency ||
      "USD"}${countryQuery || ""}${marketQuery || ""}${productQuery ||
      ""}&next=${nextCursor}`;
    console.log({ QUERY: q });
    axiosWithAuth([token])
      .get(
        `http://localhost:8888/sauti/client/?currency=${currency ||
          "USD"}${countryQuery || ""}${marketQuery || ""}${productQuery ||
          ""}&next=${nextCursor}`
      )
      .then(async res => {
        dispatch({ type: "SET_ROW_DATA", payload: res.data.records });

        await setNext([...next, res.data.next]);
        await setPrev([...prev, res.data.prev]);
      })
      .catch(e => {
        console.log({ apiCallErr: e });
        setErr(true);
      });
  };

  const apiCall = async () => {
    setErr(false);
    let q = `http://localhost:8888/sauti/client/?currency=${currency ||
      "USD"}${countryQuery || ""}${marketQuery || ""}${productQuery || ""}`;
    console.log({ QUERY: q });
    axiosWithAuth([token])
      .get(
        `http://localhost:8888/sauti/client/?currency=${currency ||
          "USD"}${countryQuery || ""}${marketQuery || ""}${productQuery || ""}`
      )
      .then(async res => {
        dispatch({ type: "SET_ROW_DATA", payload: res.data.records });

        setNext([...next, res.data.next]);
        let newCount = Math.ceil(parseInt(res.data.count[0]["count(*)"]) / 50);

        await setPrev([...prev, res.data.prev]);
        await setPage(1);
        await setCount(newCount);
      })
      .catch(e => {
        console.log({ apiCallErr: e });
        setErr(true);
      });
  };

  return (
    <GridContext.Provider value={{ store, dispatch }}>
      <div>
        {err ? (
          <div>You've reached the max amount of calls!</div>
        ) : token ? (
          <>
            <Form>
              <Dropdown
                placeholder="Countries"
                fluid
                multiple
                search
                selection
                options={countriesOptions}
                onChange={(e, { value }) =>
                  handleCountries(value, setCountries, setCountryQuery)
                }
                value={countries}
              />
              <Dropdown
                placeholder="Markets"
                fluid
                multiple
                search
                selection
                options={marketOptions}
                onChange={(e, { value }) =>
                  handleMarkets(value, setMarkets, setMarketQuery)
                }
                value={markets}
              />
              <Dropdown
                placeholder="Products"
                fluid
                multiple
                search
                selection
                options={productOptions}
                onChange={(e, { value }) =>
                  handleProducts(value, setProducts, setProductQuery)
                }
                value={products}
              />
              <Dropdown
                placeholder="Currency"
                fluid
                search
                selection
                options={currencyOptions}
                onChange={(e, { value }) => setCurrency(value)}
                value={currency}
              />
              {/* <input 
                name="end date" 
                type="date" 
                placeholder= "End Date"
                value={date.end}
                onChange={handleChange}/>
              <input 
                name="start date" 
                type="date" 
                placeholder="Start Date"
                value={date.start}
                onChange={handleChange}
              /> */}
            </Form>
            <div>
              <Button onClick={() => apiCall()}>Update Grid</Button>
              {rowData[0] && (
                <Button onClick={() => exportCSV.exportDataAsCsv(rowData)}>
                  Export CSV
                </Button>
              )}
            </div>
          </>
        ) : null}

        {/* <DataGrid /> */}
        <div style={gridStyle} className="ag-theme-balham">
          <AgGridReact
            // properties
            columnDefs={columnDefs}
            rowData={rowData}
            domLayout="autoHeight"
            reactNext={true}
            // events
            onGridReady={onGridReady}
          ></AgGridReact>
        </div>
        {page === 2 ? (
          <Button onClick={apiCall}>{"<"}</Button>
        ) : page === 1 ? (
          <Button disabled>{"<"}</Button>
        ) : (
          <Button onClick={prevApiCall}>{"<"}</Button>
        )}
        {next && page < count ? (
          <Button onClick={nextApiCall}>{`>`}</Button>
        ) : (
          <Button disabled onClick={nextApiCall}>{`>`}</Button>
        )}
        {page ? <span>{`${page} of ${count}`}</span> : null}
      </div>
    </GridContext.Provider>
  );
};

export default Grid;
