import {
  UPDATE
} from './constants';

export const student = (state = {
  list:[],
}, action) => {
  switch (action.type) {
    case UPDATE:
      return {...state, list: action.list};
    default:
      return state;
  }
}
