import React, { Fragment } from 'react'

import Hero from '../Hero'
import Content from '../Content'

const Home = ({ apiKey }) => (
  <Fragment>
    <Hero />
    <hr />
    <Content apiKey={apiKey} />
  </Fragment>
)

export default Home
