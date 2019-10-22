import React from "react";
import ReactGA from "react-ga";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../hoc/PrivateRoute";

import { Container } from "reactstrap";

import Loading from "../Loading";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Home from "../Home";
import Profile from "../Profile";
import { useAuth0 } from "../../contexts";

import "./App.scss";

// fontawesome
import initFontAwesome from "../../utils/initFontAwesome";
initFontAwesome();

/*=== function that initializes Google Analytics ===*/
/*=== https://medium.com/google-cloud/tracking-site-visits-on-react-app-hosted-in-google-cloud-using-google-analytics-f49c2411d398 ===*/

const initializeReactGA = () => {
  ReactGA.initialize("UA-150018840-1");
  ReactGA.pageview("/");
};

const App = () => {
  const { loading } = useAuth0();

  if (loading) {
    return <Loading />;
  }

  return (
    <div id="app" className="d-flex flex-column h-100">
      <NavBar />
      <Container className="flex-grow-1 mt-5">
        <Switch>
          <Route path="/" exact component={Home} />
          <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
