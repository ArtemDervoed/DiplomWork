import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  FETCH_TEACHER,
  REDIRECT_HOME,
  FETCH_GROUP
} from './constants';

export const teacher = (state = {
  firstName: '',
  lastName: '',
  email: '',
  scienceDegree: '',
  phoneNumber: '',
  subjects: [],
  group: [],
}, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return {...state, firstName: action.firstName};
    case LAST_NAME:
      return {...state, lastName: action.lastName};
    case EMAIL:
      return { ...state, email: action.email };
    case PHONE_NUMBER:
      return { ...state, phoneNumber: action.phoneNumber };
    case SCIENCE_DEGREE:
      return { ...state, scienceDegree: action.scienceDegree };
    case FETCH_TEACHER:
      return {...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        phoneNumber: action.phoneNumber,
        scienceDegree: action.scienceDegree,
        subjects: action.subjects };
    default:
      return state;
  }
}
