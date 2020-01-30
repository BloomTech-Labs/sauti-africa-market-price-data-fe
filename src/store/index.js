// Set up columns for agGrid
export const initialState = {
  rowData: [],
  columnDefs: [
    {
      headerName: 'ID',
      field: 'id',
      width: 130,
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
      // cellRendererFramework: CellRenderer
      //
      // You can attach custom renderering components to cells to customize processing / formatting of the contents
      // See https://www.ag-grid.com/javascript-grid-cell-rendering-components/
    },
    {
      headerName: 'Country',
      field: 'country',
      width: 130,
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Market',
      field: 'market',
      width: 150,
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Source',
      field: 'source',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Category',
      field: 'product_cat',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Aggregator',
      field: 'product_agg',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Product',
      field: 'product',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Retail',
      field: 'retail',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Wholesale',
      field: 'wholesale',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Currency',
      field: 'currency',
      width: 150,
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Unit',
      field: 'unit',
      width: 100,
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Date',
      field: 'date',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Udate',
      field: 'udate',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'left' }
    }
  ],
  gridStyle: {
    width: '100%',
    marginTop: 15
  }
}

// Update grid state
export const reducer = (state = { rowData: [] }, action) => {
  switch (action.type) {
    case 'SET_ROW_DATA':
      return {
        ...state,
        rowData: action.payload
      }
    default:
      return state
  }
}
