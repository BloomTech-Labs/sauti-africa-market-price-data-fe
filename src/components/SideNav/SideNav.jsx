import React, { useRef } from "react";
import { Container, Header, Menu } from "semantic-ui-react";
import Highlight from "react-highlight";

import apiKeyGif from "../../assets/apiKey.gif";

import "highlight.js/styles/monokai-sublime.css";
import "./SideNav.scss";

const SideNav = () => {
  //Managing the state of Side Nav Tabbing between by setting the active item
  // const [active, setActive] = useState({ activeItem: 'Quick Start' })
  // const handleItemClick = (e, { name }) => setActive({ activeItem: name })

  //Applying scrolling to places of the page

  let scrollToPlay;
  window.innerWidth > 599
    ? (scrollToPlay = ref => window.scrollTo(0, ref.current.offsetTop))
    : (scrollToPlay = ref => window.scrollTo(0, ref.current.offsetTop - 200));
  const play = useRef();
  const quick = useRef();
  const refer = useRef();

  return (
    <div className="side-nav">
      <Menu size="massive" pointing vertical className="side-nav-items">
        <Menu.Item name="API" />
        <Menu.Item name="Quick Start" onClick={() => scrollToPlay(quick)} />
        <Menu.Item name="Playground" onClick={() => scrollToPlay(play)} />
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
                "https://sauti-africa-market-master.herokuapp.com/sauti/developer"
              }
            </Highlight>
            <h5>Available Endpoints</h5>

            <h6>specific list - market, country, source, product</h6>
            <Highlight language="javascript">
              {
                "https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists/"
              }
            </Highlight>

            <h6>filter</h6>
            <Highlight language="javascript">
              {
                "https://sauti-africa-market-master.herokuapp.com/sauti/developer/filter/"
              }
            </Highlight>

            <h6>
              “latest price” - latest prices on a product across all markets
            </h6>
            <Highlight language="javascript">
              {
                "https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/latestprice/"
              }
            </Highlight>

            <h6>
              “latest market price” - latest price on a product in a particular
              market
            </h6>
            <Highlight language="javascript">
              {
                "https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/pricebymarket/"
              }
            </Highlight>

            <h6>
              “product prices by date range” - prices of a product across a date
              range
            </h6>
            <Highlight language="javascript">
              {
                "https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/range/"
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
        <section className="articles-examples" ref={play}>
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
        </section>
        <section className="articles-examples" ref={refer}>
          <article className="left-article">
            <Header as="h2">Reference</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur? <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos,
              molestias ut. Similique, facere magni. Pariatur, veritatis nihil
              architecto, laboriosam iusto in autem modi, dignissimos
              perferendis atque cupiditate odio quos sequi.
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">Example of request and Response Image???</Header>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus sit commodi, adipisci aliquid itaque id repellat magnam
              ea iste vel optio quas deserunt minima mollitia facilis
              laboriosam, praesentium dignissimos consequuntur?
            </p>
          </article>
        </section>
      </Container>
    </div>
  );
};

export default SideNav;
