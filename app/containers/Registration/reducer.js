import {
  SUBMIT,
} from './constants';

export const submit = (state = { successfull: false }, action) => {
  switch (action.type) {
    case SUBMIT:
      return {...state, successfull: action.successfull};
    default:
      return state;
  }
}
