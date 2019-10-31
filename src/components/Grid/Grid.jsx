import React, { useReducer, useState } from 'react'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react'
// import DataGrid from '../DataGrid'

import { GridContext } from '../../contexts'
import { initialState, reducer } from '../../store'

import { Button, Form } from 'semantic-ui-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const Grid = ({ apiKey }) => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const { columnDefs, rowData, gridStyle } = store
  const [err, setErr] = useState(false)
  const [query, setQuery] = useState('c=UGA')

  const onGridReady = params => {
    params.api.sizeColumnsToFit()
  }

  const handleCountry = label => {
    console.log(label)
    if (!query.includes(label)) {
      if (!query.includes('=')) {
        setQuery(`c=${label}`)
      } else {
        setQuery(`${query}&c=${label}`)
      }
    }
  }

  const apiCall = () => {
    setErr(false)
    axios
      .get(
        `https://sauti-africa-market-master.herokuapp.com/sauti/client/?${query}&count=50&p=Yellow%20Beans`,
        // `http://localhost:8888/sauti/client/?${query}&count=50&p=Yellow%20Beans`,
        {
          headers: {
            key: apiKey
          }
        }
      )
      .then(res => {
        dispatch({ type: 'SET_ROW_DATA', payload: res.data })
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
        ) : apiKey ? (
          <>
            <Form>
              <Form.Checkbox
                label="RWA"
                onChange={(e, { label }) => handleCountry(label)}
              />
              <Form.Checkbox
                label="UGA"
                onChange={(e, { label }) => handleCountry(label)}
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
