import { useContext, createContext, useEffect, useReducer } from "react";
import firebase, { firestore } from "../config/firebase";
import uuidv5 from "uuid";

const googleProvider = new firebase.auth.GoogleAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();
let facebookProvider = new firebase.auth.FacebookAuthProvider();

export const userContext = createContext({
  user: null,
  initializing: true,
  gettingData: true,
  auth: null,
  onBoardUser: false
});

export const useSession = () => {
  const { state } = useContext(userContext);
  return state;
};

const initialState = {
  user: {},
  initializing: true,
  auth: null,
  onBoardUser: false
};

export const AUTH_CHANGE = "AUTH_CHANGE";
export const SET_DATA = "SET_DATA";
export const ONBOARD_USER = "ONBOARD_USER";

const reducer = (state, action) => {
  switch (action.type) {
    case AUTH_CHANGE:
      return { ...state, initializing: false, auth: action.payload };
    case SET_DATA:
      return {
        ...state,
        gettingData: false,
        onBoardUser: false,
        user: action.payload
      };
    case ONBOARD_USER:
      return { ...state, onBoardUser: true };
    default:
      return state;
  }
};

export const useAuth = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function onChange(user) {
    dispatch({ type: AUTH_CHANGE, payload: user });
  }

  useEffect(() => {
    // listen for auth state changes
    const unsubscribe = firebase.auth().onAuthStateChanged(onChange);
    // unsubscribe to the listener when unmounting
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (state.auth) {
      const unsubscribe = firestore
        .doc(`users/${state.auth.uid}`)
        .onSnapshot(snapShot => {
          if (snapShot.exists) {
            // console.log("snapShot.data()", snapShot.data());
            dispatch({ type: SET_DATA, payload: snapShot.data() });
          } else {
            dispatch({ type: ONBOARD_USER });
          }
        });

      return () => unsubscribe();
    }
  }, [state.auth]);

  return { state, dispatch };
};

export const GOOGLE_AUTH_PROVIDER = "GOOGLE_AUTH_PROVIDER";
export const FACEBOOK_AUTH_PROVIDER = "FACEBOOK_AUTH_PROVIDER";
export const GITHUB_AUTH_PROVIDER = "GITHUB_AUTH_PROVIDER";
export const EMAIL_AUTH_PROVIDER_SIGNUP = "EMAIL_AUTH_PROVIDER_SIGNUP";
export const EMAIL_AUTH_PROVIDER_LOGIN = "EMAIL_AUTH_PROVIDER_LOGIN";
export const SIGN_OUT = "SIGN_OUT";

// Needs error handling!
export const authHandler = (type, values) => {
  switch (type) {
    case GOOGLE_AUTH_PROVIDER:
      return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(res => {
          firestore
            .collection("users")
            .doc(res.user.uid)
            .set(
              {
                email: res.user.email,
                name: res.user.displayName,
                profile: res.user.photoURL,
                apiKey: res.user.apiKey || uuidv5()
              },
              { merge: true }
            )
            .then(user => {
              if (user.additionalUserInfo.isNewUser) {
                // Do something extra for new users
              }
            })
            .catch(err => {
              console.log("Google auth error", err);
            });
        });
    case EMAIL_AUTH_PROVIDER_LOGIN:
      return firebase
        .auth()
        .signInWithEmailAndPassword(values.email, values.password);
    case EMAIL_AUTH_PROVIDER_SIGNUP:
      return firebase
        .auth()
        .createUserWithEmailAndPassword(values.email, values.password);
    case FACEBOOK_AUTH_PROVIDER:
      return firebase
        .auth()
        .signInWithPopup(facebookProvider)
        .then(res => {
          firestore
            .collection("users")
            .doc(res.user.uid)
            .set(
              {
                email: res.user.email,
                name: res.user.displayName,
                profile: res.user.photoURL,
                apiKey: res.user.apiKey || uuidv5()
              },
              { merge: true }
            )
            .then(user => {
              if (user.additionalUserInfo.isNewUser) {
                // Do something extra for new users
              }
            });
        })
        .catch(err => {
          console.log("Facebook auth error", err);
        });
    case GITHUB_AUTH_PROVIDER:
      return firebase
        .auth()
        .signInWithPopup(githubProvider)
        .then(res => {
          firestore
            .collection("users")
            .doc(res.user.uid)
            .set(
              {
                email: res.user.email,
                name: res.additionalUserInfo.profile.name,
                username: res.additionalUserInfo.username,
                profile: res.additionalUserInfo.profile.avatar_url,
                apiKey: res.user.apiKey || uuidv5()
              },
              { merge: true }
            )
            .then(user => {
              if (user.additionalUserInfo.isNewUser) {
                // Do something extra for new users
              }
            })
            .catch(err => {
              console.log("Github auth error", err);
            });
        });
    default:
      return firebase.auth().signOut();
  }
};
