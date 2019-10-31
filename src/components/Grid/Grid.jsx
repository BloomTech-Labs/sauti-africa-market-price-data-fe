import React, { useReducer, useState } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import { AgGridReact } from 'ag-grid-react'
// import DataGrid from '../DataGrid'
import useGetToken from '../../hooks/useGetToken'

import { GridContext } from '../../contexts'
import { initialState, reducer } from '../../store'

import { Dropdown, Button, Form } from 'semantic-ui-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const countryList = [
  {
    name: 'Uganda',
    abbreviation: 'UGA'
  },
  {
    name: 'Rwanda',
    abbreviation: 'RWA'
  },
  {
    name: 'Tanzania',
    abbreviation: 'TZA'
  },
  {
    name: 'Kenya',
    abbreviation: 'KEN'
  },
  {
    name: 'Burundi',
    abbreviation: 'BDI'
  },
  {
    name: 'DR Congo',
    abbreviation: 'DRC'
  },
  {
    name: 'Malawi',
    abbreviation: 'MWI'
  },
  {
    name: 'South Sudan',
    abbreviation: 'SSD'
  }
]

const countryOptions = countryList.map((country, index) => ({
  key: `country-${index}`,
  text: country.name,
  value: country.abbreviation
}))

const currencyList = ['MWK', 'RWF', 'KES', 'UGX', 'TZS', 'CDF', 'BIF', 'USD']

const currencyOptions = currencyList.map((currency, index) => ({
  key: `currency-${index}`,
  text: currency,
  value: currency.toLowerCase()
}))

const Grid = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const { columnDefs, rowData, gridStyle } = store
  const [err, setErr] = useState(false)
  const [query, setQuery] = useState('c=UGA')
  const [countries, setCountries] = useState([])
  const [currency, setCurrency] = useState()
  const [token] = useGetToken()

  const onGridReady = params => {
    params.api.sizeColumnsToFit()
  }

  const handleCountry = (e, { value }) => {
    e.preventDefault()
    const countryQuery = value.map((country, index) => {
      if (index > 0) {
        return `&c=${country}`
      } else {
        return `c=${country}`
      }
    })
    setCountries(value)
    setQuery(countryQuery.join(''))
  }

  const handleCurrency = (e, { value }) => {
    e.preventDefault()
    setCurrency(value)
  }

  const apiCall = () => {
    setErr(false)
    axiosWithAuth([token])
      .get(
        // `https://sauti-africa-market-master.herokuapp.com/sauti/client/?${query}&count=50&p=Yellow%20Beans`,
        `http://localhost:8888/sauti/client/?${query}&count=150&p=Yellow%20Beans&currency=${currency ||
          'USD'}`
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
                options={countryOptions}
                onChange={handleCountry}
                value={countries}
              />
              <Dropdown
                placeholder="Currency"
                fluid
                search
                selection
                options={currencyOptions}
                onChange={handleCurrency}
                value={currency}
              />
            </Form>
            <Button onClick={() => apiCall()}>Update Grid</Button>
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
