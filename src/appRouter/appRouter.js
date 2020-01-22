import React from 'react';
import {Router} from 'react-router-dom';
import App from '../components/App'
import {Auth0Provider} from '../hooks/useAuth0';



//import history package to create a history object that can be passed via router. 
import { createBrowserHistory} from 'history'
//create history object
const history = createBrowserHistory();

const onRedirectCallback = appState => {
    history.push(
      appState && appState.targetUrl
        ? appState.targetUrl
        : window.location.pathname
    )
  }

const AppRouter = () => {
       
    return (
            <Router history={history} >
                <React.Fragment>
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
                </React.Fragment>
            </Router>
    )
}

export default AppRouter
