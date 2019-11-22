import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import 'bootstrap/dist/css/bootstrap.min.css'
import * as Sentry from '@sentry/browser'

import * as serviceWorker from './serviceWorker'

import './index.scss'
import 'semantic-ui-css/semantic.min.css'
import 'semantic-ui-css/semantic.min.css'

import { Auth0Provider } from './hooks/useAuth0'
import { Router } from 'react-router-dom'
import history from './utils/history'

Sentry.init({
  dsn: 'https://ed2c8b82501542498bcdb20ad95bac85@sentry.io/1779492'
})

const onRedirectCallback = appState => {
  history.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  )
}

const styleLink = document.createElement('link')
styleLink.rel = 'stylesheet'
styleLink.href =
  'https://cdn.jsdelivr.net/npm/semantic-ui/dist/semantic.min.css'
document.head.appendChild(styleLink)

ReactDOM.render(
  <Router history={history}>
    <Auth0Provider
      domain={process.env.REACT_APP_DOMAIN}
      client_id={process.env.REACT_APP_CLIENT_ID}
      redirect_uri={window.location.origin}
      onRedirectCallback={onRedirectCallback}
      audience={process.env.REACT_APP_AUDIENCE}
      response_type="token id_token"
    >
      <App />
    </Auth0Provider>
  </Router>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
