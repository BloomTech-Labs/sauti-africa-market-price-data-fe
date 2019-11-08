import React from 'react'

import logo from '../../assets/sauti-logo.png'

const Hero = () => (
  <div className="text-center hero my-5">
    <img
      className="mb-3 app-logo"
      src={logo}
      alt="Sauti Africa logo"
      width="120"
    />
    <h1 className="mb-4">Sauti Market Prices API</h1>
    <p>
      A public-facing API that allows you to access Sauti Africa's market price
      data
    </p>
    <p>Please login to view the table</p>
  </div>
)

export default Hero
