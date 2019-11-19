import CellRenderer from '../components/CellRenderer'

// Set up columns for agGrid
export const initialState = {
  rowData: [],
  columnDefs: [
    {
      headerName: 'ID',
      field: 'id',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Country',
      field: 'country',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Market',
      field: 'market',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Source',
      field: 'source',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Category',
      field: 'product_cat',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Aggregator',
      field: 'product_agg',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Product',
      field: 'product',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Retail',
      field: 'retail',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Wholesale',
      field: 'wholesale',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Currency',
      field: 'currency',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Unit',
      field: 'unit',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Date',
      field: 'date',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Udate',
      field: 'udate',
      resizable: true,
      sortable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
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
