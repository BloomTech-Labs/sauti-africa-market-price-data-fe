import CellRenderer from '../components/CellRenderer'

export const initialState = {
  rowData: [],
  columnDefs: [
    {
      headerName: 'Country',
      field: 'country',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Market',
      field: 'market',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Source',
      field: 'source',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Category',
      field: 'product_cat',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Aggregator',
      field: 'product_agg',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Product',
      field: 'product',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Retail',
      field: 'retail',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Wholesale',
      field: 'wholesale',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Currency',
      field: 'currency',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Unit',
      field: 'unit',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Date',
      field: 'date',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    },
    {
      headerName: 'Udate',
      field: 'udate',
      resizable: true,
      cellStyle: { textAlign: 'right' },
      cellRendererFramework: CellRenderer
    }
  ],
  gridStyle: {
    width: '100%',
    marginTop: 15
  }
}

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
