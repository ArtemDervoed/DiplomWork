import {
  SEND_LOGIN,
  REDIRECT_TO_HOME
} from './constants';

export const sendLogin = (state = {
  isAuthenticated: false,
  mail:'',
}, action) => {
  switch (action.type) {
    case SEND_LOGIN:
      return {...state, role: action.role};
    case REDIRECT_TO_HOME:
      return {...state};
    default:
      return state;
  }
}
