import React, { useContext } from 'react'
import { GridContext } from '../../contexts'
import { AgGridReact } from 'ag-grid-react'

const GridComponent = () => {
  const { store } = useContext(GridContext)
  const { columnDefs, rowData, gridStyle } = store

  const onGridReady = params => {
    params.api.sizeColumnsToFit()
  }

  return (
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
  )
}

export default GridComponent
