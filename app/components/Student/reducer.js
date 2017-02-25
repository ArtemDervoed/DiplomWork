import {
  USER_NAME,
  EMAIL,
  GROUP,
  UPDATE,
  REDIRECT_HOME
} from './constants';

export const student = (state = {
  userName:'lol',
  email:'lol@mail.ru',
  group: 'ИВТ1303',
  update: ''
}, action) => {
  switch (action.type) {
    case USER_NAME:
      return {...state, userName: action.userName};
    case EMAIL:
      return {...state, email: action.email};
    case GROUP:
      return {...state, group: action.group};
    case UPDATE:
      return {...state, update: action.payload};
    case REDIRECT_HOME:
      return { ...state };
    default:
      return state;
  }
}
