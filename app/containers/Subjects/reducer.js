import {
  FETCH_SUBJECTS,
  BEGIN_SUBJECT,
  BEGIN_THEME
} from './constants';

export const subjects = (state = {
  subjects: {},
  themes: {}
}, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return {...state, subjects: action.subjects};
    case BEGIN_SUBJECT:
      return {...state};
    case BEGIN_THEME:
      return {...state};
    default:
      return state;
  }
}
