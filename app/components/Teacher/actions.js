import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  UNIVERSITY,
  FETCH_TEACHER,
  REDIRECT_HOME
} from './constants';
import { browserHistory } from 'react-router';

export const userName = response => dispatch => {
  return dispatch({type: USER_NAME, userName: response })
};
export const email = response => dispatch => {
  return dispatch({type: EMAIL, email: response })
};
export const phoneNumber = response => dispatch => {
  return dispatch({type: PHONE_NUMBER, phoneNumber: response })
};
export const scienceDegree = response => dispatch => {
  return dispatch({type: SCIENCE_DEGREE, scienceDegree: response })
};
export const redirectHome = response => dispatch => {
  browserHistory.push('/');
  return dispatch({ type: REDIRECT_HOME })
};
export const fetchTeacher = response => dispatch => {
  let userId = JSON.parse(localStorage.getItem('user_id'));
  let token = JSON.parse(localStorage.getItem('auth_token'));
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/teachers/' + userId, {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_TEACHER,
        email: json.email,
        firstName: json.first_name,
        lastName: json.last_name,
        phoneNumber: json.phone_number,
        scienceDegree: json.science_degree })
    });
};
