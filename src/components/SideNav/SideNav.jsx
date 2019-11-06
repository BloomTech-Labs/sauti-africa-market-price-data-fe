import React, { useRef } from 'react'
import { Container, Header, Menu, Table } from 'semantic-ui-react'
import Highlight from 'react-highlight'

import apiKeyGif from '../../assets/apiKey.gif'

import 'highlight.js/styles/monokai-sublime.css'
import './SideNav.scss'

const SideNav = () => {
  //Managing the state of Side Nav Tabbing between by setting the active item
  // const [active, setActive] = useState({ activeItem: 'Quick Start' })
  // const handleItemClick = (e, { name }) => setActive({ activeItem: name })

  //Applying scrolling to places of the page
  const scrollToPlay = ref => window.scrollTo(0, ref.current.offsetTop)
  const play = useRef()
  const quick = useRef()
  const refer = useRef()

  return (
    <div className="side-nav">
      <Menu size="massive" pointing vertical className="side-nav-items">
        <Menu.Item name="API" />
        <Menu.Item name="Quick Start" onClick={() => scrollToPlay(quick)} />
        {/* <Menu.Item name="Playground" onClick={() => scrollToPlay(play)} /> */}
        <Menu.Item name="Reference" onClick={() => scrollToPlay(refer)} />
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
              Africa.
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
          <article className="right-article">
            {/* <Header as="h2">Request & Response</Header>
            <Highlight className="JSON">
              <p>{JSON.stringify({ hi: 'mommy' })}</p>
            </Highlight> */}
          </article>
        </section>
        {/* <section className="articles-examples" ref={play}>
          <article className="left-article">
            <Header as="h2">Playground</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur? <br /> Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Maiores
              mollitia, eius porro, incidunt corporis in velit tempore fugiat
              perspiciatis voluptas ex libero expedita atque dignissimos?
              Voluptatem dignissimos vel dolores tenetur.
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">Alternative example of Playground case</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
        </section> */}
        <section className="articles-examples" ref={refer}>
          <article className="left-article">
            <Header as="h2">API Reference</Header>

            {/* Specific List: Market, Country, Source, Product */}
            <h3 style={{ color: 'chartreuse' }}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Specific List: Market, Country, Source, Product
              </span>
            </h3>
            <p>
              Returns a list of based on query parameter of /?list= If incorrect
              parameter is passed, it will default to returning a list of all
              markets.
            </p>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/?list=[MARKET][COUNTRY][SOURCE][PRODUCT]'
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
                  <Table.Cell>list</Table.Cell>
                  <Table.Cell>
                    Enter one of the strings: market, country, source, product
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h3>Example Response</h3>
            <br />

            {/* Perform Filter Search */}
            <h3 style={{ color: 'chartreuse' }}>
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
              25 at first page. Maximum count of records is 500 per call.
            </p>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/?list=[MARKET][COUNTRY][SOURCE][PRODUCT]'
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
                  <Table.Cell>list</Table.Cell>
                  <Table.Cell>
                    Enter one of the strings: market, country, source, product
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h3>Example Response</h3>
            <br />

            {/* Latest Prices on a Product across all Markets */}
            <h3 style={{ color: 'chartreuse' }}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Latest Prices on a Product across all Markets
              </span>
            </h3>
            <p>
              Returns a list of based on query parameter of /?list= If incorrect
              parameter is passed, it will default to returning a list of all
              markets.
            </p>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/?list=[MARKET][COUNTRY][SOURCE][PRODUCT]'
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
                  <Table.Cell>list</Table.Cell>
                  <Table.Cell>
                    Enter one of the strings: market, country, source, product
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h3>Example Response</h3>
            <br />

            {/* Latest Price on a product in a particular market */}
            <h3 style={{ color: 'chartreuse' }}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Latest Price on a product in a particular market
              </span>
            </h3>
            <p>
              Returns a list of based on query parameter of /?list= If incorrect
              parameter is passed, it will default to returning a list of all
              markets.
            </p>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/?list=[MARKET][COUNTRY][SOURCE][PRODUCT]'
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
                  <Table.Cell>list</Table.Cell>
                  <Table.Cell>
                    Enter one of the strings: market, country, source, product
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h3>Example Response</h3>
            <br />

            {/* Find prices of a product across a date range */}
            <h3 style={{ color: 'chartreuse' }}>
              GET{' '}
              <span style={{ color: 'black' }}>
                Find prices of a product across a date range
              </span>
            </h3>
            <p>
              Returns a list of based on query parameter of /?list= If incorrect
              parameter is passed, it will default to returning a list of all
              markets.
            </p>
            <Highlight language="javascript">
              {
                'https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/?list=[MARKET][COUNTRY][SOURCE][PRODUCT]'
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
                  <Table.Cell>list</Table.Cell>
                  <Table.Cell>
                    Enter one of the strings: market, country, source, product
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <h3>Example Response</h3>
            <br />
          </article>
          {/* <article className="right-article">
            <Header as="h2">Example of request and Response Image???</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article> */}
        </section>
      </Container>
    </div>
  )
}

export default SideNav
