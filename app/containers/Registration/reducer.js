import {
  SUBMIT,
  FETCH_UNIVERSITIES
} from './constants';

export const registration = (state = {
  successfull: false,
  groups: [] }, action) => {
  switch (action.type) {
    case SUBMIT:
      return {...state, successfull: action.successfull};
    case FETCH_UNIVERSITIES:
      return {...state, groups: action.payload.groups};
    default:
      return state;
  }
}
