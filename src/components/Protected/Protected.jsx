import React from 'react'
import { Message } from 'semantic-ui-react'
import logo from '../../assets/sauti-logo.png'

const Protected = () => (
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
    <a href="https://sauti-africa-market-prices.auth0.com/login?state=g6Fo2SBNbFJUaFBrWThzUnZtYkx0TThWSnVJdlRsMmdzUzNPX6N0aWTZIDNxY0Q4SlI1ZjNLN2pVdHE1MXI4WVFfZW03OHJmSy1mo2NpZNkgYnhvc1lEZUNSc01NSUV1UkZ5dGUya3hpZkM1dUs5dWE&client=bxosYDeCRsMMIEuRFyte2kxifC5uK9ua&protocol=oauth2&redirect_uri=https%3A%2F%2Fprice-api.sautiafrica.org&audience=https%3A%2F%2Fsauti-africa-market-prices.auth0.com%2Fapi%2Fv2%2F&response_type=code&scope=openid%20profile%20email&response_mode=query&nonce=cLMKzIk8nkGe4LQeuNLbDYzMB.ZPZiWzaXrQb.7YzJx&code_challenge=TkKgSra8OD_ZTUDCwJ9jbXvSDgjsZWq_qPb0iuRL3oA&code_challenge_method=S256&auth0Client=eyJuYW1lIjoiYXV0aDAtc3BhLWpzIiwidmVyc2lvbiI6IjEuNS4wIn0%3D">
      <Message error>
        <Message.Header size="huge">
          Please login to view the table
        </Message.Header>
      </Message>
    </a>
  </div>
)

export default Protected


/*

old code:

import React from 'react'
import { Message } from 'semantic-ui-react'
import logo from '../../assets/sauti-logo.png'

const Protected = () => (
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
    <Message error>
      <Message.Header size="huge">
        Please login to view the table
      </Message.Header>
    </Message>
  </div>
)

export default Protected



*/
