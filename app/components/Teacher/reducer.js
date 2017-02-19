import {
  USER_NAME,
  EMAIL,
  PHONE_NUMBER
} from './constants';

export const teacher = (state = {
  userName:'lol',
  email:'lol@mail.ru',
  phoneNumber: '88005553535',
}, action) => {
  switch (action.type) {
    case USER_NAME:
      return {...state, userName: action.userName};
    case EMAIL:
      return {...state, email: action.email};
    case PHONE_NUMBER:
      return {...state, phoneNumber: action.phoneNumber};
    default:
      return state;
  }
}
