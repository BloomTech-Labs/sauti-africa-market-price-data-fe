import React, { useState, useRef } from 'react'
import { Container, Header, Menu } from 'semantic-ui-react'
import Highlight from 'react-highlight'

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
        <Menu.Item name="Playground" onClick={() => scrollToPlay(play)} />
        <Menu.Item name="Reference" onClick={() => scrollToPlay(refer)} />
      </Menu>

      <Container fluid className="center-api-column">
        <section className="articles-examples">
          <article className="left-article">
            <Header as="h2">API</Header>
            <p>
              Sauti Africa Market Prices API is designed to acquire acquire
              specific data from an internal database and send out JSON
              response.
            </p>
          </article>
          <article className="right-article">
            <Header as="h2">
              Start Acquiring the API from Above in your Profile
            </Header>
            <p>
              Go ahead log in to your profile to acquire the API Key (See Above
              for Log In or Profile Picture) <br /> Pass the API Key as part of
              headers in request as <Highlight>key: your API Key</Highlight>
            </p>
          </article>
        </section>
        <section className="articles-examples" ref={quick}>
          <article className="left-article">
            <Header as="h2">Quick Start</Header>
            <p>
              The idea of using this API to acquire records based on certain
              filters. Let's walk you through an example scenario. <br />{' '}
              (Following request are done using a valid API Key) <br />
            </p>
            <ol>
              <li>
                Let's try to find if there is product 'Apples' in this database,
                so send a request:
                <p>
                  https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists?list=product
                </p>
              </li>
              <br />
              <li>
                Let's now find the country 'RWA', Send the following request:
                <p>
                  https://sauti-africa-market-master.herokuapp.com/sauti/developer/lists?list=country
                </p>
              </li>
              <br />
              <li>
                Let's get some records of Apples from country 'RWA', send this
                request:
                <p>
                  https://sauti-africa-market-master.herokuapp.com/sauti/developer/filter/?p=apples&c=RWA
                </p>
              </li>
              <br />
              <li>
                Let's get 50 records instead of default 20.
                <p>
                  https://sauti-africa-market-master.herokuapp.com/sauti/developer/filter/?p=apples&c=RWA&count=50
                </p>
              </li>
              <br />
              <li>
                Let's check if there is 2nd page of more records
                <p>
                  https://sauti-africa-market-master.herokuapp.com/sauti/developer/filter/?p=apples&c=RWA&count=50&page=2
                </p>
              </li>
              <br />
              You will notice that response returns 404 with this message
              'Records don't exist here, change the query parameters or change
              page no. ' <br />
              <br />
              Going to back to Step 4 and count the no. of records sent was 26.
              Now we can use information 'Apples' and find latest prices across
              market, so use the endpoint list below
              <p>
                https://sauti-africa-market-master.herokuapp.com/sauti/developer/product/latestprice/?product=apples
              </p>
            </ol>
          </article>
          <article className="right-article">
            <Header as="h2">Request & Response</Header>
            <Highlight className="JSON">
              <p>{JSON.stringify({ hi: 'mommy' })}</p>
            </Highlight>
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
  )
}

export default SideNav
