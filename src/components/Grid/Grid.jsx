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
  handleCountries
} from '../../config/gridDropdown'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const Grid = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const { columnDefs, rowData, gridStyle } = store
  const [err, setErr] = useState(false)
  const [query, setQuery] = useState()
  const [countries, setCountries] = useState([])
  const [currency, setCurrency] = useState()
  const [token] = useGetToken()

  const onGridReady = params => {
    params.api.sizeColumnsToFit()
  }

  const apiCall = () => {
    setErr(false)
    axiosWithAuth([token])
      .get(
        // `https://sauti-africa-market-master.herokuapp.com/sauti/client/?${query}&count=50&p=Yellow%20Beans`,
        `http://localhost:8888/sauti/client/?count=150&p=Yellow%20Beans&currency=${currency ||
          'USD'}&${query || ''}`
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
                  handleCountries(value, setCountries, setQuery)
                }
                value={countries}
              />
              <Dropdown
                placeholder="Currency"
                fluid
                search
                selection
                options={currencyOptions}
                onChange={e => setCurrency(e.target.value)}
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
