import React, { useEffect, useState } from "react";

import { Route, Switch } from "react-router-dom";
import PrivateRoute from "../../hoc/PrivateRoute";

import { PageView, initGA } from "../Tracking/Tracking";
import Loading from "../Loading";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Home from "../Home";
import Profile from "../Profile";
import Landing from "../Landing/index.js";
import DocsPage from "../Docs/index";
import GridPage from "../GridPage";
import { useAuth0 } from "../../contexts";

import "./App.scss";

// fontawesome
import initFontAwesome from "../../utils/initFontAwesome";
initFontAwesome();

const App = () => {
  const { loading } = useAuth0();
  const [apiKey, setApiKey] = useState();

  useEffect(() => {
    /*=== function that initializes Google Analytics ===*/
    initGA(process.env.REACT_APP_GOOGLE_TRACKING_ID);
    PageView();
  });

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      {" "}
      {/*className="d-flex flex-column h-100"*/}
      <NavBar />
      {/*className="flex-grow-1 mt-5"*/}
      {/*<Container>*/}
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route
          path="/grid"
          exact
          render={props => <GridPage {...props} apiKey={apiKey} />}
        />
        <PrivateRoute
          path="/profile"
          component={Profile}
          apiKey={apiKey}
          setApiKey={setApiKey}
        />
        <Route exact path="/docs" component={DocsPage} />
      </Switch>
      {/*</Container>*/}
      <Footer />
    </div>
  );
};

export default App;
