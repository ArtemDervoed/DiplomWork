import {
  SEND_QUIZ,
  REDIRECT_TO_HOME
} from './constants';

export const sendLogin = (state = {
  isAuthenticated: false,
  mail:'',
}, action) => {
  switch (action.type) {
    case SEND_QUIZ:
      return {...state};
    default:
      return state;
  }
}
