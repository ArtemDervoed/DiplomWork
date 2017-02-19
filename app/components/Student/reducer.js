import {
  USER_NAME,
  EMAIL,
} from './constants';

export const student = (state = {
  userName:'lol',
  email:'lol@mail.ru',
}, action) => {
  switch (action.type) {
    case USER_NAME:
      return {...state, userName: action.userName};
    case EMAIL:
      return {...state, email: action.email};
    default:
      return state;
  }
}
