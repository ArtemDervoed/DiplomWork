import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  GROUP,
  FETCH_STUDENT,
  REDIRECT_HOME
} from './constants';
import { browserHistory } from 'react-router';

export const firstName = response => dispatch => {
  return dispatch({type: FIRST_NAME, userName: response })
};
export const lastName = response => dispatch => {
  return dispatch({type: LAST_NAME, lastName: response })
};
export const email = response => dispatch => {
  return dispatch({type: EMAIL, email: response })
};
export const group = response => dispatch => {
  return dispatch({type: GROUP, group: response })
};
export const redirectHome = response => dispatch => {
  browserHistory.push('/');
  return dispatch({ type: REDIRECT_HOME })
};
export const fetchStudent = response => dispatch => {
  let userId = JSON.parse(localStorage.getItem('user_id'));
  let token = JSON.parse(localStorage.getItem('auth_token'));
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/students/' + userId, {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_STUDENT,
        email: json.email,
        firstName: json.first_name,
        lastName: json.last_name,})
    });
};
