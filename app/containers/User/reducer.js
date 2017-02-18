import {
  EDIT,
} from './constants';

export const edit = (state = {
  data:'',
}, action) => {
  switch (action.type) {
    case EDIT:
      return {...state, data: action.data};
    default:
      return state;
  }
}
