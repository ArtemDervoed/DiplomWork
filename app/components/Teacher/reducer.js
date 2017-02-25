import {
  USER_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  UPDATE,
  REDIRECT_HOME
} from './constants';

export const teacher = (state = {
  userName:'lol',
  email:'lol@mail.ru',
  group: 'ИВТ1303',
  update: '' }, action) => {
  switch (action.type) {
    case USER_NAME:
      return { ...state, userName: action.userName };
    case EMAIL:
      return { ...state, email: action.email };
    case PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber };
    case SCIENCE_DEGREE:
      return { ...state, scienceDegree: action.scienceDegree };
    case UPDATE:
      return { ...state, update: action.payload };
    case REDIRECT_HOME:
      return { ...state };
    default:
      return state;
  }
}
