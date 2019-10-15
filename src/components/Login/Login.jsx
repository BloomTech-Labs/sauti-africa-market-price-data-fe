import React from "react";

import {
  authHandler,
  GOOGLE_AUTH_PROVIDER,
  // EMAIL_AUTH_PROVIDER_LOGIN,
  // EMAIL_AUTH_PROVIDER_SIGNUP,
  FACEBOOK_AUTH_PROVIDER,
  GITHUB_AUTH_PROVIDER
} from "../../hooks/useAuth";
import { Redirect } from "react-router-dom";

import { useSession } from "../../hooks/useAuth";

import "./Login.scss";

const Login = () => {
  const { auth: user } = useSession();
  if (user) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <div className="Login">
      <h1>Login</h1>
      <button onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
        Login with Google
      </button>
      <br />
      <button onClick={() => authHandler(GITHUB_AUTH_PROVIDER)}>
        Login with Github
      </button>
      <br />
      <button onClick={() => authHandler(FACEBOOK_AUTH_PROVIDER)}>
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
