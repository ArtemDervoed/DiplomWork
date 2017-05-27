import {
  SUBMIT,
  FETCH_GROUPS,
  FETCH_SCIENCE_DEGREE
} from './constants';

export const registration = (state = {
  successfull: false,
  groups: [],
  scienceDegree: [],
}, action) => {
  switch (action.type) {
    case SUBMIT:
      return {...state, successfull: action.successfull};
    case FETCH_GROUPS:
      return {...state, groups: action.payload};
    case FETCH_SCIENCE_DEGREE:
      return {...state, scienceDegree: action.payload};
    default:
      return state;
  }
}
