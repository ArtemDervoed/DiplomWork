import {
  USER_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  FETCH_TEACHER,
  REDIRECT_HOME
} from './constants';

export const teacher = (state = {
  userName:'',
  email:'',
  scienceDegree: '',
  phoneNumber: '' }, action) => {
  switch (action.type) {
    case USER_NAME:
      return { ...state, userName: action.userName };
    case EMAIL:
      return { ...state, email: action.email };
    case PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber };
    case SCIENCE_DEGREE:
      return { ...state, scienceDegree: action.scienceDegree };
    case FETCH_TEACHER:
      return {...state,
        userName: action.name,
        email: action.email,
        phoneNumber: action.phoneNumber,
        scienceDegree: action.scienceDegree, };
    default:
      return state;
  }
}
