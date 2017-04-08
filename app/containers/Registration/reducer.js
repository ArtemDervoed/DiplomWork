import {
  SUBMIT,
  FETCH_GROUPS
} from './constants';

export const registration = (state = {
  successfull: false,
  groups: [] }, action) => {
  switch (action.type) {
    case SUBMIT:
      return {...state, successfull: action.successfull};
    case FETCH_GROUPS:
      return {...state, groups: action.payload};
    default:
      return state;
  }
}
