import React from "react";
import { useSession } from "../../hooks/useAuth";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ view: Component, ...rest }) => {
  const { auth: user } = useSession();
  if (user) {
    return <Route {...rest} render={props => <Component {...props} />} />;
  }
  return <Redirect to="/login" />;
};

export default PrivateRoute;
