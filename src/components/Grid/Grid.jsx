import React, { useReducer } from 'react'
import DataGrid from '../DataGrid'

import { GridContext } from '../../contexts'
import { initialState, reducer } from '../../store'

import { Button } from 'reactstrap'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'

const Grid = () => {
  const [store, dispatch] = useReducer(reducer, initialState)

  return (
    <GridContext.Provider value={{ store, dispatch }}>
      <div>
        <Button
          size="md"
          color="primary"
          onClick={() => dispatch({ type: 'SET_ROW_DATA' })}
        >
          Populate Grid
        </Button>
        <DataGrid />
      </div>
    </GridContext.Provider>
  )
}

export default Grid
