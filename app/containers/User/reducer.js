import {
  EDIT,
  FETCH_TEACHER
} from './constants';

export const edit = (state = {
  name: '',
  email: '',
  phoneNumber: '',
  scienceDegree: ''}, action) => {
  switch (action.type) {
    case EDIT:
      return {...state, data: action.data};
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
