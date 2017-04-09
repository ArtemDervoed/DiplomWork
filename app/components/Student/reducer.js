import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  GROUP,
  FETCH_STUDENT,
  REDIRECT_HOME
} from './constants';

export const student = (state = {
  firstName:'',
  lastName:'',
  group: '',
  email:'',
  studyings: '',
}, action) => {
  switch (action.type) {
    case FIRST_NAME:
      return {...state, firstName: action.firstName};
    case LAST_NAME:
      return {...state, lastName: action.lastName};
    case EMAIL:
      return {...state, email: action.email};
    case GROUP:
      return {...state, group: action.group};
    case FETCH_STUDENT:
      return {...state,
        firstName: action.firstName,
        lastName: action.lastName,
        email: action.email,
        group: action.group,
        studyings: action.studyings,
      }
    case REDIRECT_HOME:
      return { ...state };
    default:
      return state;
  }
}
