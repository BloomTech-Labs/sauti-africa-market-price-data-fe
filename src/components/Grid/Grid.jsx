import React, { useReducer, useState } from 'react'
import axios from 'axios'
import DataGrid from '../DataGrid'

import { GridContext } from '../../contexts'
import { initialState, reducer } from '../../store'

import { Button } from 'reactstrap'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const Grid = ({ apiKey }) => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const [err, setErr] = useState(false)

  const apiCall = () => {
    setErr(false)
    axios
      .get(
        'https://sauti-africa-market-master.herokuapp.com/sauti/developer/filter/',
        {
          headers: {
            key: apiKey
          }
        }
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
        ) : apiKey ? (
          <Button size="md" color="primary" onClick={() => apiCall()}>
            Populate Grid
          </Button>
        ) : null}

        <DataGrid />
      </div>
    </GridContext.Provider>
  )
}

export default Grid
