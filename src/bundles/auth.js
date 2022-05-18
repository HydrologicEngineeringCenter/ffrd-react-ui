import Keycloak from '@lib/keycloak';

const keycloakHost = process.env.REACT_APP_KEYCLOAK_HOST
const keycloakRealm = process.env.REACT_APP_KEYCLOAK_REALM
const keycloakClient = process.env.REACT_APP_KEYCLOAK_CLIENT
const keycloakRedirect = process.env.REACT_APP_REDIRECT_URI

let keycloak = null; // elevate scope to file

const AUTH_ACTION = {
  INITIALIZED: "AUTH_ACTION.INITIALIZED",
  LOAD: "AUTH_ACTION.LOAD",
  AUTHENTICATE: "AUTH_ACTION.AUTHENTICATE",
  GET_TOKEN: "AUTH_ACTION.GET_TOKEN",
  UPDATE_KEYCLOAK: "AUTH_ACTION.UPDATE_KEYCLOAK",
  STORE_USER_INFO: "AUTH_ACTION.STORE_USER_INFO",
  STOP_LOADING: "AUTH_ACTION.STOP_LOADING",
  START_LOADING: "AUTH_ACTION.START_LOADING",
}

const initialData = {
  jwt: null,
  roles: null,
  fullName: null,
  userId: null,
  name: null,
  exp: null
}

const initialState = {
  data: initialData,
  loading: false,
  shouldQuery: false,
  err: null,
  lastError: null,
  lastFetch: null,
  keycloak: null, // object providing auth functionality
}

const auth = {

  name: "auth",

  getReducer: () => {
    return (state = initialState, { type, payload }) => {
      switch (type) {
        default:
          return payload ? { ...state, ...payload } : { ...state }
      }
    }
  },

  init: store => {

    keycloak = new Keycloak({
      keycloakUrl: keycloakHost,
      realm: keycloakRealm,
      client: keycloakClient,
      redirectUrl: keycloakRedirect,
      refreshInterval: 30,
      sessionEndWarning: 600,
      clientSecret: keycloakClientSecret,

      onAuthenticate: (token) => {
        store.doAuth_Update(token);
      },

      onError: () => {
        store.doAuth_Update(null);
      },

      onSessionEnding: (remainingTime) => {
        console.log(remainingTime);
        store.doTriggerNotification("warning", `Your session is expiring in ${Math.round(remainingTime / 60)} minutes.`)
      }
    });
    keycloak.checkForSession();
  },

  // begin auth flow
  doAuth_KeycloakAuthenticate: () => ({ dispatch }) => {
    dispatch({ type: AUTH_ACTION.AUTHENTICATE, loading: true });
    keycloak.authenticate(); // sends a user authorization request to keycloak /auth endpoint
  },

  doAuth_StopLoading: () => ({ dispatch }) => {
    dispatch({ type: AUTH_ACTION.STOP_LOADING, loading: false });
  },

  doAuth_Update: (token) => ({ dispatch }) => {
    // parse raw data
    let authInfo;
    if (token === null) {
      authInfo = {
        roles: [],
        name: "",
        sub: -1,
      }
    } else {
      authInfo = JSON.parse(window.atob(token.split(".")[1]));
    }
    dispatch({
      type: AUTH_ACTION.STORE_USER_INFO,
      payload: {
        loading: false,
        data: {
          jwt: token,
          roles: authInfo.roles,
          fullName: authInfo.preferred_username,
          userId: Number(authInfo.sub),
          name: authInfo.name ? authInfo.name.split(".")[0] : "",
          exp: authInfo.exp
        },
        lastFetch: Date.now(),
        requestErr: null,
      },
    });
  },

  selectAuthAccessToken: state => state.auth.data?.jwt,
  selectAuthFullname: state => state.auth.data?.fullName,
  selectAuth_roles: state => state.auth.data?.roles,
  selectAuth_userId: state => state.auth.data?.userId,
};

export default auth;
