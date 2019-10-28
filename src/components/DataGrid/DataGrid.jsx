import React, { useContext } from 'react'
import { GridContext } from '../../contexts'
import { AgGridReact } from 'ag-grid-react'

const DataGrid = () => {
  const { store, dispatch } = useContext(GridContext)
  const { columnDefs, rowData } = store

  const onGridReady = params => {
    params.api.sizeColumnsToFit()
  }

  return (
    <div
      style={{ height: 400, width: 900, marginTop: 15 }}
      className="ag-theme-balham"
    >
      <AgGridReact
        // properties
        columnDefs={columnDefs}
        rowData={rowData}
        reactNext={true}
        // events
        onGridReady={onGridReady}
      ></AgGridReact>
    </div>
  )
}

export default DataGrid
