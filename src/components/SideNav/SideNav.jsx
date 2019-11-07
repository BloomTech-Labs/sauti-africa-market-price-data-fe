import React, { useRef } from 'react'
import { Container, Header, Menu, Table, Popup, Icon } from 'semantic-ui-react'
import Highlight from 'react-highlight'

import apiKeyGif from '../../assets/apiKey.gif'
import listGif from '../../assets/listexample.gif'
import filterGif from '../../assets/filterexample.gif'
import priceAllGif from '../../assets/priceallmarketsexample.gif'
import priceProductMarketGif from '../../assets/pricemarketproductexample.gif'
import priceDateGif from '../../assets/pricedateexample.gif'

import 'highlight.js/styles/monokai-sublime.css'
import './SideNav.scss'

const SideNav = () => {
  //Managing the state of Side Nav Tabbing between by setting the active item
  // const [active, setActive] = useState({ activeItem: 'Quick Start' })
  // const handleItemClick = (e, { name }) => setActive({ activeItem: name })

  //Applying scrolling to places of the page
  const scrollToPlay = ref => window.scrollTo(0, ref.current.offsetTop)
  const quick = useRef()
  const refer = useRef()
  const list = useRef()
  const filter = useRef()
  const latestPrice = useRef()
  const lastestMarketPrice = useRef()
  const dateRange = useRef()

  return (
    <div className="side-nav">
      <Menu size="massive" pointing vertical className="side-nav-items">
        <Menu.Item name="API" />
        <Menu.Item name="Quick Start" onClick={() => scrollToPlay(quick)} />
        <Menu.Item name="Reference" onClick={() => scrollToPlay(refer)} />
        <Menu.Item name="Lists Endpoint" onClick={() => scrollToPlay(list)} />
        <Menu.Item
          name="Filter Search Endpoint"
          onClick={() => scrollToPlay(filter)}
        />
        <Menu.Item
          name="Latest Price in All Markets Endpoint"
          onClick={() => scrollToPlay(latestPrice)}
        />
        <Menu.Item
          name="Latest Price by Market Endpoint"
          onClick={() => scrollToPlay(lastestMarketPrice)}
        />
        <Menu.Item
          name="Latest Price by Date Range Endpoint"
          onClick={() => scrollToPlay(dateRange)}
        />
      </Menu>

      <Container fluid className="center-api-column">
        <section className="articles-examples">
          <article className="left-article">
            <Header as="h2">API</Header>
            <p>
              {/* Sauti Africa Market Prices API is designed to acquire acquire
              specific data from an internal database and send out JSON
              response. */}
              Sauti Africa Market Prices API is designed to provide up-to-date
              daily prices for about 100 products across 60 marketplaces in East
              Africa. The API has resource-oriented URLs, retrns JSON-encoded
              responses and uses standard HTTP response codes, authentication
              and verbs.
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">
              {/* Start Acquiring the API from Above in your Profile */}
            </Header>
            <p>
              {/* Go ahead log in to your profile to acquire the API Key (See Above
              for Log In or Profile Picture) <br /> Pass the API Key as part of
              headers in request as <Highlight>key: your API Key</Highlight> */}
            </p>
          </article>
        </section>
        <section className="articles-examples" ref={quick}>
          <article className="left-article">
            <Header as="h2">Quick Start</Header>
            <h3>API Access Key & Authentication</h3>
            <p>
              After signing up, every user is assigned a personal API access
              key, a unique combination of letters and digits provided to access
              any of the API's data endpoints. To authenticate with the Sauti
              Africa Market Prices API, simply pass the API Key as part of the
              headers.
            </p>
            <img src={apiKeyGif} />
          </article>
          <article className="right-article">
            <h3>API Endpoints</h3>
            <p>
              The Sauti Africa Market Prices API offers 5 customizable
              endpoints, all of which provide different kinds of data.
            </p>
            <h5>
              Base URL: All API requests start out with the following base URL:
            </h5>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer'
              }
            </Highlight>
            <h5>Available Endpoints</h5>

            <h6>specific list - market, country, source, product</h6>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/'
              }
            </Highlight>

            <h6>filter</h6>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/filter/'
              }
            </Highlight>

            <h6>
              “latest price” - latest prices on a product across all markets
            </h6>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/latestprice/'
              }
            </Highlight>

            <h6>
              “latest market price” - latest price on a product in a particular
              market
            </h6>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/pricebymarket/'
              }
            </Highlight>

            <h6>
              “product prices by date range” - prices of a product across a date
              range
            </h6>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/range/'
              }
            </Highlight>
          </article>
        </section>
        <section className="articles-examples" ref={refer}>
          <article className="left-article">
            <Header as="h2">API Reference</Header>

            {/* Specific List: Market, Country, Source, Product */}
            <h3 style={{ color: 'chartreuse' }} ref={list}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Specific List: Market, Country, Source, Product
              </span>
            </h3>
            <p>
              Returns a list of based on query parameter of /?list= If incorrect
              parameter is passed, it will default to returning a list of all
              markets.{' '}
              <Popup
                trigger={<Icon name="question circle" size="large" />}
                content="You can scroll the URL below horizontally"
                position="right center"
              />
              <Highlight language="javascript" className="highlight">
                {'https://sauti-africa-market-master.herokuapp.com/sauti/'}
                <br />
                {'developer/lists/?list=[MARKET][COUNTRY][SOURCE][PRODUCT]'}
              </Highlight>
            </p>
            <h3>Request Parameters</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Parameter</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>list</Table.Cell>
                  <Table.Cell>
                    Enter one of the strings: market, country, source, product
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </article>
          <article className="right-article">
            <img
              src={listGif}
              alt="Example lists endpoint"
              className="gif-examples"
            />
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            {/* Perform Filter Search */}
            <h3 style={{ color: 'chartreuse' }} ref={filter}>
              GET <span style={{ color: 'black' }}>Perform Filter Search</span>
            </h3>
            <p>
              Returns array of records via query. Query filters accepted are
              product, product_agg,category, market and country. Multiple of
              same filter type can be passed too by simply adding same query key
              with appropriate value. Default is to return 25 records based on
              latest dates.
            </p>
            <p>All records are sorted by date descending.</p>
            <p>Check the example.</p>
            <p>
              This endpoint has pagination built in. Default count of records is
              25 at first page. Maximum count of records is 500 per call.{' '}
              <Popup
                trigger={<Icon name="question circle" size="large" />}
                content="You can scroll the URL below horizontally"
                position="right center"
              />
            </p>
            <Highlight language="javascript">
              {'https://sauti-africa-market-master.herokuapp.com/sauti/'}
              <br />
              {
                'developer/filter/?p=[PRODUCT]&market=[MARKET]&pcat=[PRODUCT CATEGORY]'
              }
              <br />
              {
                '&pagg=[PRODUCT AGGREGATE]&c=[COUNTRY]&page=[PAGE NUMBER]&count=[NUMBER OF RECORDS]'
              }
            </Highlight>
            <h3>Request Parameters</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Parameter</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>p</Table.Cell>
                  <Table.Cell>
                    Product name - 3rd Level - You can retrieve a list of
                    Products from lists endpoint
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>market</Table.Cell>
                  <Table.Cell>Market name</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>pcat</Table.Cell>
                  <Table.Cell>Product Category name - 1st Level</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>pagg</Table.Cell>
                  <Table.Cell>Product aggregate name - 2nd Level</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>page</Table.Cell>
                  <Table.Cell>
                    Page number, by default sets to 1 if not passed.
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>count</Table.Cell>
                  <Table.Cell>
                    Sets the count for number of records in each call. Max is
                    500
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </article>
          <article className="right-article">
            <img
              src={filterGif}
              alt="Example Filterable search endpoint"
              className="gif-examples"
            />
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            {/* Latest Prices on a Product across all Markets */}
            <h3 style={{ color: 'chartreuse' }} ref={latestPrice}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Latest Prices on a Product across all Markets
              </span>
            </h3>
            <p>
              Returns all records on given product. Pass the query /?product=
            </p>
            <Highlight language="javascript">
              {'https://sauti-africa-market-master.herokuapp.com/sauti/'}
              <br />
              {'developer/product/latestprice/?product=[PRODUCT]'}
            </Highlight>
            <h3>Request Parameters</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Parameter</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>product</Table.Cell>
                  <Table.Cell>Name of a product</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </article>
          <article className="right-article">
            <img
              src={priceAllGif}
              alt="Example Filterable search endpoint"
              className="gif-examples"
            />
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            {/* Latest Price on a product in a particular market */}
            <h3 style={{ color: 'chartreuse' }} ref={lastestMarketPrice}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Latest Price on a product in a particular market
              </span>
            </h3>
            <p>
              Returns price of a single product from a single market.{' '}
              <Popup
                trigger={<Icon name="question circle" size="large" />}
                content="You can scroll the URL below horizontally"
                position="right center"
              />
            </p>
            <Highlight language="javascript">
              {'https://sauti-africa-market-master.herokuapp.com/sauti/'}
              <br />
              {
                'developer/product/pricebymarket/?market=[MARKET]a&product=[PRODUCT]'
              }
            </Highlight>
            <h3>Request Parameters</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Parameter</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>market</Table.Cell>
                  <Table.Cell>Enter name of a market</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>product</Table.Cell>
                  <Table.Cell>Enter name of a product</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </article>
          <article className="right-article">
            <img
              src={priceProductMarketGif}
              alt="Example Filterable search endpoint"
              className="gif-examples"
            />
          </article>
        </section>
        <section className="articles-examples">
          <article className="left-article">
            {/* Find prices of a product across a date range */}
            <h3 style={{ color: 'chartreuse' }} ref={dateRange}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Find prices of a product across a date range
              </span>
            </h3>
            <p>
              Pass the query paramaters of a product, startDate and endDate.
              Sends a response of all available records in that date range
              separated by pagination.
              <br />
              <br />
              Starting date needs to be older than Ending Date for succesful
              query.{' '}
              <Popup
                trigger={<Icon name="question circle" size="large" />}
                content="You can scroll the URL below horizontally"
                position="right center"
              />
            </p>
            <Highlight language="javascript">
              {'https://sauti-africa-market-master.herokuapp.com/sauti/'}
              <br />
              {
                'developer/product/range/?product=[PRODUCT]&startDate=[START DATE]&endDate=[END DATE]'
              }
            </Highlight>
            <h3>Request Parameters</h3>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Parameter</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell>Product</Table.Cell>
                  <Table.Cell>Enter name of a product</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>startDate</Table.Cell>
                  <Table.Cell>
                    Starting date (must be older than EndDate)
                  </Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell>endDate</Table.Cell>
                  <Table.Cell>Ending date where range stops</Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
          </article>
          <article className="right-article">
            <img
              src={priceDateGif}
              alt="Example price by date endpoint"
              className="gif-examples"
            />
          </article>
        </section>
      </Container>
    </div>
  )
}

export default SideNav
