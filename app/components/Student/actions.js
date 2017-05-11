import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  GROUP,
  FETCH_STUDENT,
  REDIRECT_HOME
} from './constants';
import { browserHistory } from 'react-router';
import {URL} from './../../app.js';
import { getToken, getUserId } from '../../utils/token.js'

let userId = getToken();
let token = getToken();

export const firstName = response => dispatch => {
  let newFirstName = { first_name:response };
  return fetch(URL +'/api/students/' + userId, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Methods": "GET, PATCH, POST, PUT, DELETE, OPTIONS",
       Authorization: 'Token ' + token,
    },
    body: JSON.stringify(newFirstName),
  })
  .then(() => {
    dispatch({type: FIRST_NAME, firstName: newFirstName.first_name })
  })
};
export const lastName = response => dispatch => {
  let newLastName = { last_name:response };
  return fetch(URL +'/api/students/' + userId, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Methods": "GET, PATCH, POST, PUT, DELETE, OPTIONS",
       Authorization: 'Token ' + token,
    },
    body: JSON.stringify(newLastName),
  })
  .then(() => {
    dispatch({type: LAST_NAME, lastName: newLastName.last_name })
  })
};
export const email = response => dispatch => {
  let newEmail = { email:response };
  return fetch(URL +'/api/students/' + userId, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      "Access-Control-Allow-Methods": "GET, PATCH, POST, PUT, DELETE, OPTIONS",
       Authorization: 'Token ' + token,
    },
    body: JSON.stringify(newEmail),
  })
  .then(() => {
    dispatch({type: EMAIL, email: newEmail.email })
  })
};
export const redirectHome = response => dispatch => {
  browserHistory.push('/');
  return dispatch({ type: REDIRECT_HOME })
};
export const fetchStudent = response => dispatch => {
  return fetch(URL +'/api/student_profile', {
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
        lastName: json.last_name,
        group: json.group,
        studyings: json.studyings,
      })
    });
};
