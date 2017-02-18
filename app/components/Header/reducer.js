import {
  LOGOUT,
  LOGIN,
  REGISTRATION,
  GO_TO_USER
} from './constants';

export const authorization = (state = {
  isAuthenticated: false,
}, action) => {
  switch (action.type) {
    case LOGOUT:
      return {...state, isAuthenticated: action.isAuthenticated};
    case LOGIN:
      return {...state, isAuthenticated: action.isAuthenticated};
    case REGISTRATION:
      return {...state, isAuthenticated: action.isAuthenticated};
    case GO_TO_USER:
      return state;
    default:
      return state;
  }
};
