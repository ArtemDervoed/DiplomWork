import {
  USER_NAME,
  EMAIL,
  GROUP
} from './constants';

export const student = (state = {
  userName:'lol',
  email:'lol@mail.ru',
  group: 'ИВТ1303'
}, action) => {
  switch (action.type) {
    case USER_NAME:
      return {...state, userName: action.userName};
    case EMAIL:
      return {...state, email: action.email};
    case GROUP:
      return {...state, group: action.group};
    default:
      return state;
  }
}
