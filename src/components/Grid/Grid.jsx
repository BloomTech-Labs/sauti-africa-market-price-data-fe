import React, { useReducer, useState, useEffect } from 'react'
import { axiosWithAuth } from '../../utils/axiosWithAuth'
import axios from 'axios'
import { AgGridReact } from 'ag-grid-react'
// import DataGrid from '../DataGrid'
import useGetToken from '../../hooks/useGetToken'

import { GridContext } from '../../contexts'
import { initialState, reducer } from '../../store'

import { Container } from 'reactstrap'
import { Dropdown, Button, Form } from 'semantic-ui-react'
import moment from 'moment'
import { DatePicker } from 'antd'

import {
  currencyOptions
} from '../../config/gridDropdown'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
import 'antd/dist/antd.css';


const { RangePicker } = DatePicker;

const Grid = () => {
  const [store, dispatch] = useReducer(reducer, initialState)
  const { columnDefs, rowData, gridStyle } = store
  const [err, setErr] = useState(false)

  //Usestate to set inputs for table
  const [list, setList] = useState(null)

  // UseState to set queries in URL
  const [countryQuery, setCountryQuery] = useState()
  const [marketQuery, setMarketQuery] = useState()
  const [pCatQuery, setPCatQuery] = useState()
  const [pAggQuery, setPAggQuery] = useState()
  const [productQuery, setProductQuery] = useState()

  const [countries, setCountries] = useState([])
  const [markets, setMarkets] = useState([])
  const [pCats, setPCats] = useState([])
  const [pAggs, setPAggs] = useState([])
  const [products, setProducts] = useState([])
  const [currency, setCurrency] = useState()
  const [dateRanges, setDateRanges] = useState([])

  const [token] = useGetToken()
  const [exportCSV, setExportCSV] = useState(null)

  useEffect(()=> {
    axios.get('http://localhost:8888/sauti/client/superlist')
    .then(res => {
      setList(res.data)
    })
    .catch(err => {
      console.log(err.message)
    })
  
  }, [])

  // Options for dropDown
  let countriesOptions = []
 if(list) countriesOptions = list.countries.map((country, index) => ({
    key: `country-${index}`,
    value: country.country,
    text: country.country
  }))
 let marketOptions = []
  if(list) marketOptions = list.markets.map((market, index) => ({
    key: `market-${index}`,
    text: market.market,
    value: market.market
  }))
let pCategoryOptions = []
  if(list) pCategoryOptions = list.categories.map((product_cat, index) => ({
    key: `category-${index}`,
    text: product_cat.product_cat,
    value: product_cat.product_cat
  }))
let pAggregatorOptions = []
  if(list) pAggregatorOptions = list.aggregators.map((product_agg, index) => ({
    key: `Aggregator-${index}`,
    text: product_agg.product_agg,
    value: product_agg.product_agg
  }))
let productOptions = []
  if(list) productOptions = list.products.map((product, index) => ({
    key: `product-${index}`,
    text: product.product,
    value: product.product
  }))

  
  // Submit handlers for dropDown
  const handleCountries = (value, countriesUpdater, queryUpdater) => {
    const countryQuery = value.map((country, index) => {
      if (index > 0) {
        return `&c=${country}`
      } else {
        return `c=${country}`
      }
    })
    countriesUpdater(value)
    queryUpdater(countryQuery.join(''))
  }
  
  const handleMarkets = (value, marketsUpdater, marketQueryUpdater) => {
    const marketQuery = value.map((market, index) => {
      if (index > 0) {
        return `&m=${market}`
      } else {
        return `m=${market}`
      }
    })
    console.log(value)
    marketsUpdater(value)
    marketQueryUpdater(marketQuery.join(''))
  }
  
  const handlePCats = (value,pCatsUpdater,pCatsQueryUpdater) => {
    const pCatQuery = value.map((category, index) => {
      if (index > 0) {
        return `&pcat=${category}`
      } else {
        return `pcat=${category}`
      }
    })
    console.log(value)
    pCatsUpdater(value)
    pCatsQueryUpdater(pCatQuery.join(''))
  }
  
  const handlePAggs = (value,pAggsUpdater,pAggsQueryUpdater) => {
    const pAggQuery = value.map((aggregator, index) => {
      if (index > 0) {
        return `&pagg=${aggregator}`
      } else {
        return `pagg=${aggregator}`
      }
    })
    console.log(value)
    pAggsUpdater(value)
    pAggsQueryUpdater(pAggQuery.join(''))
  }
  
  const handleProducts = (value,productsUpdater,productsQueryUpdater) => {
    const productQuery = value.map((product, index) => {
      if (index > 0) {
        return `&p=${product}`
      } else {
        return `p=${product}`
      }
    })
    console.log(value)
    productsUpdater(value)
    productsQueryUpdater(productQuery.join(''))
  }

  function disabledDate(current) {
    // Can not select days after today and today
    return current && current > moment().endOf('day');
  }

  const onGridReady = params => {
    console.log(params.api)
    params.api.sizeColumnsToFit()
    setExportCSV(params.api)
  }

  const apiCall = () => {

    const dateRangeQuery = (dateRanges) ? `&startDate=${dateRanges[0].format('YYYY-MM-DD')}&endDate=${dateRanges[1].format('YYYY-MM-DD')}` : '';
    console.log('date', dateRangeQuery);
    setErr(false)
    axiosWithAuth([token])
      .get(
        // `https://sauti-africa-market-master.herokuapp.com/
        `http://localhost:8888/sauti/client/?count=150&currency=${currency ||
          'USD'}&${countryQuery || ''}&${marketQuery || ''}&${pCatQuery ||
            ''}&${pAggQuery || ''}&${productQuery ||''}${dateRangeQuery || ''}`
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
    <Container className="flex-grow-1 mt-5">
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
                  handleCountries(value, setCountries, setCountryQuery)
                }
                value={countries}
              />
              <Dropdown
                placeholder="Markets"
                fluid
                multiple
                search
                selection
                options={marketOptions}
                onChange={(e, { value }) =>
                  handleMarkets(value, setMarkets, setMarketQuery)
                }
                value={markets}
              />
              <Dropdown
                placeholder="Product Category"
                fluid
                multiple
                search
                selection
                options={pCategoryOptions}
                onChange={(e, { value }) =>
                  handlePCats(value, setPCats, setPCatQuery)
                }
                value={pCats}
              />
              <Dropdown
                placeholder="Product Aggregator"
                fluid
                multiple
                search
                selection
                options={pAggregatorOptions}
                onChange={(e, { value }) =>
                  handlePAggs(value, setPAggs, setPAggQuery)
                }
                value={pAggs}
              />
              <Dropdown
                placeholder="Products"
                fluid
                multiple
                search
                selection
                options={productOptions}
                onChange={(e, { value }) =>
                  handleProducts(value, setProducts, setProductQuery)
                }
                value={products}
              />
              <Dropdown
                placeholder="Currency"
                fluid
                search
                selection
                options={currencyOptions}
                onChange={(e, { value }) => setCurrency(value)}
                value={currency}
              />
              <RangePicker
                value={dateRanges}
                disabledDate={disabledDate}
                onChange={(dates, date) => {
                  console.log(dates)
                  setDateRanges(dates);
                }}

              />
            </Form>
            <div>
              <Button onClick={() => apiCall()}>Update Grid</Button>
              {rowData[0] && (
                <Button onClick={() => exportCSV.exportDataAsCsv(rowData)}>
                  Export CSV
                </Button>
              )}
            </div>
          </>
        ) : null}

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
    </Container>
  )
}

export default Grid
