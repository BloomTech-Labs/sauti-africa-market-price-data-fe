// Set up columns for agGrid
export const initialState = {
  rowData: [],
  columnDefs: [
    {
      headerName: 'ID',
      field: 'id',
      autoSizePadding: 0,
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
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Market',
      field: 'market',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Source',
      field: 'source',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Category',
      field: 'product_cat',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Aggregator',
      field: 'product_agg',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Product',
      field: 'product',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Retail',
      field: 'retail',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Wholesale',
      field: 'wholesale',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Currency',
      field: 'currency',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Unit',
      field: 'unit',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Date',
      field: 'date',
      sortable: true,
      cellStyle: { textAlign: 'left' }
    },
    {
      headerName: 'Udate',
      field: 'udate',
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
