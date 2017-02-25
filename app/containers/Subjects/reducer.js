import {
  SEND_LOGIN,
} from './constants';

export const sendLogin = (state = {
  isAuthenticated: false,
  mail:'',
}, action) => {
  switch (action.type) {
    case SEND_LOGIN:
      return {...state, role: action.role};
    default:
      return state;
  }
}
