// import React from "react";

// import {
//   authHandler,
//   GOOGLE_AUTH_PROVIDER,
//   // EMAIL_AUTH_PROVIDER_LOGIN,
//   // EMAIL_AUTH_PROVIDER_SIGNUP,
//   FACEBOOK_AUTH_PROVIDER,
//   GITHUB_AUTH_PROVIDER
// } from "../../hooks/useAuth";
// import { Redirect } from "react-router-dom";

// import { useSession } from "../../hooks/useAuth";

// import "./Login.scss";

// const Login = () => {
//   const { auth: user } = useSession();
//   if (user) {
//     return <Redirect to="/dashboard" />;
//   }
//   return (
//     <div className="Login">
//       <h1>Login</h1>
//       <button onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}>
//         Login with Google
//       </button>
//       <br />
//       <button onClick={() => authHandler(GITHUB_AUTH_PROVIDER)}>
//         Login with Github
//       </button>
//       <br />
//       <button onClick={() => authHandler(FACEBOOK_AUTH_PROVIDER)}>
//         Login with Facebook
//       </button>
//     </div>
//   );
// };

// export default Login;
import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import Container from "@material-ui/core/Container";

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

const Login = () => {
  const classes = useStyles();
  const { auth: user } = useSession();
  if (user) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          className={classes.submit}
          onClick={() => authHandler(GOOGLE_AUTH_PROVIDER)}
        >
          Sign in with Google
        </Button>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          size="medium"
          className={classes.submit}
          onClick={() => authHandler(GITHUB_AUTH_PROVIDER)}
        >
          Sign in with Github
        </Button>
        <Typography variant="body2" color="textSecondary" align="center">
          or
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Typography variant="body2" color="textSecondary" align="center">
          {`Copyright © ${new Date().getFullYear()} `}
          <Link color="inherit" href="https://material-ui.com/">
            Sauti Africa Limited. All rights reserved.
          </Link>
        </Typography>
      </Box>
    </Container>
  );
};

export default Login;
