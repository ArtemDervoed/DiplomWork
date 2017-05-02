import {
  FETCH_SUBJECTS,
  FETCH_SUBJECT_THEMES
} from './constants';

export const subjects = (state = {
  subjects: {},
  themes: {}
}, action) => {
  switch (action.type) {
    case FETCH_SUBJECTS:
      return {...state, subjects: action.subjects};
    case FETCH_SUBJECT_THEMES:
      return {...state, themes: action.themes};
    default:
      return state;
  }
}
