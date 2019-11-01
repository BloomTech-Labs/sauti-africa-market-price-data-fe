import React, { useReducer, useState } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { AgGridReact } from 'ag-grid-react'
// import DataGrid from '../DataGrid'
import useGetToken from '../../hooks/useGetToken'

import { GridContext } from '../../contexts'
import { initialState, reducer } from '../../store'

import { Dropdown, Button, Form } from 'semantic-ui-react'

import {
  currencyOptions,
  countriesOptions,
  marketOptions,
  productOptions,
  handleCountries,
  handleMarkets,
  handleProducts
} from '../../config/gridDropdown'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const Grid = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const { columnDefs, rowData, gridStyle } = store
  const [err, setErr] = useState(false)
  const [countryQuery, setCountryQuery] = useState()
  const [marketQuery, setMarketQuery] = useState()
  const [productQuery, setProductQuery] = useState()
  const [countries, setCountries] = useState([])
  const [markets, setMarkets] = useState([])
  const [products, setProducts] = useState([])
  const [currency, setCurrency] = useState()
  const [token] = useGetToken()
  const [exportCSV, setExportCSV] = useState(null)

  const onGridReady = params => {
    console.log(params.api)
    params.api.sizeColumnsToFit()
    setExportCSV(params.api)
  }

  const apiCall = () => {
    setErr(false)
    axiosWithAuth([token])
      .get(
        // `https://sauti-africa-market-master.herokuapp.com/sauti/client/?${query}&count=50&p=Yellow%20Beans`,
        `http://localhost:8888/sauti/client/?count=150&currency=${currency ||
          'USD'}&${countryQuery || ''}&${marketQuery || ''}&${productQuery ||
          ''}`
      )
      .then(res => {
        dispatch({ type: 'SET_ROW_DATA', payload: res.data.records })
      })
      .catch(e => {
        console.log({ apiCallErr: e })
        setErr(true)
      })
  }

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
      </div>
    </GridContext.Provider>
  )
}

export default Grid
