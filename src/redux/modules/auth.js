import { push } from 'react-router-redux';

// Actions
const LOGIN_REQUEST = 'react-demo-app/auth/LOGIN_REQUEST';
const LOGIN_SUCCESS = 'react-demo-app/auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'react-demo-app/auth/LOGIN_FAILURE';
const LOGOUT = 'react-demo-app/auth/LOGOUT';

const initialState = {
  isAuthenticated: false,
  isAuthenticating: false,
  statusText: 'Authenticate yourself.',
};

// Reducer

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isAuthenticating: true,
        statusText: 'Authenticating...',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        isAuthenticating: false,
        statusText: 'Authenticated!',
      };
    case LOGIN_FAILURE:
      return {
        ...initialState,
        statusText: 'Authentication failed!',
      };
    case LOGOUT:
      return {
        ...initialState,
        statusText: 'Logged out.',
      };
    default:
      return state;
  }
}

// Action Creators
// using flux standard actions: https://github.com/acdlite/flux-standard-action

export function loginRequest() {
  return {
    type: LOGIN_REQUEST,
  };
}

export function loginSuccess() {
  return {
    type: LOGIN_SUCCESS,
  };
}

export function loginFailure() {
  return {
    type: LOGIN_FAILURE,
    error: true,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function login(username, password, redirect = 'protected') {
  return dispatch => {
    dispatch(loginRequest());
    setTimeout(() => {
      if (Math.random() >= 0.5) {
        dispatch(loginSuccess());
        dispatch(push(redirect));
      } else {
        dispatch(loginFailure());
      }
    }, 1000);
  };
}
