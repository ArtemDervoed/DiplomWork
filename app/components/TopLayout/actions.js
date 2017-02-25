
import fetch from 'isomorphic-fetch';
import { push } from 'react-router-redux';
import { browserHistory } from 'react-router';
import TO_SUBJECTS from './constants';
export const toSubjects = response => dispatch => {
  if (localStorage.getItem('is_authenticated')) {
    browserHistory.push('/subjects');
  } else {
    browserHistory.push('/login');
  }
  return dispatch({ type: TO_SUBJECTS })
};
