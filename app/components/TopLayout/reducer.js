
import {
TO_SUBJECTS
} from './constants';

export const topLayout = (state = { }, action) => {
  switch (action.type) {
    case TO_SUBJECTS:
      return {...state };
    default:
      return state;
  }
}
