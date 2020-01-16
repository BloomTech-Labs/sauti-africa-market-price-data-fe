import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from '../../hoc/PrivateRoute'
import { PageView, initGA } from '../Tracking/Tracking'
import Loading from '../Loading'
import NavBar from '../NavBar'
import Footer from '../Footer'
import Profile from '../Profile'
import Landing from '../Landing/index.js'
import Documentation from '../Documentation/index'
import GridPage from '../GridPage'
import { useAuth0 } from '../../contexts'
import UserRoles from '../Profile/UserRoles'
import './App.scss'
import { validateRole, setRedirectURL } from '../../utils/roles'

// fontawesome
import initFontAwesome from '../../utils/initFontAwesome'
initFontAwesome()

const App = () => {
  const { loading, user, isAuthenticated, setURL } = useAuth0()
  console.log(useAuth0())
  const [apiKey, setApiKey] = useState()
  // const [status, setStatus] = useState()
  // const [userInfo, setUserInfo] = useState(user)

  useEffect(() => {

    // setUserInfo(user)

    // * IF USER OBJ AND IS AUTHENTICATED, THEN VALIDATE USER ROLE DATA, AND SET STATE.
    // if (!!user === true && isAuthenticated === true){
    //   validateRole({ sub: user.sub }, setStatus)
    //   console.log('STATUS', status)
    //   !!status === true && setRedirectURL(status, setURL)
    // }

    /*=== function that initializes Google Analytics ===*/
    initGA(process.env.REACT_APP_GOOGLE_TRACKING_ID)
    PageView()
  }, [])

  if (loading) {
    return <Loading />
  }

  return (
    <div className="appContainer">
      {/*className="d-flex flex-column h-100"*/}
      <NavBar />
      <Switch>
        <Route path="/" exact render={props => <Landing {...props} />} />
        <Route exact path="/data" component={GridPage} />
        <PrivateRoute
          path="/profile"
          component={Profile}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />
        <Route exact path="/docs" component={Documentation} />
        <Route exact path="/plan" component={UserRoles} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
