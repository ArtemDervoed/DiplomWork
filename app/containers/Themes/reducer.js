import {
  FETCH_THEMES,
} from './constants';

export const themes = (state = {
  themes: {},
}, action) => {
  switch (action.type) {
    case FETCH_THEMES:
      return {...state, themes: action.themes};
    default:
      return state;
  }
}
