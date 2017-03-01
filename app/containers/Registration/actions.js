/*
 *
 * Registration actions
 *
 */
import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
const domen = 'https://serene-hamlet-19929.herokuapp.com/';
import {
  SUBMIT,
  FETCH_GROUPS
} from './constants';

export const fetchUniversities = response => dispatch => {
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/groups', {
    method: 'Get',
  })
    .then(response => response.json())
    .then(json => dispatch({type: FETCH_GROUPS, payload: json}));
};

export const registration = response => dispatch => {
  let data = '';
  let fullDomen = domen;
  let status = null;
  if (response.role === 'teacher') {
    data = JSON.stringify({
      first_name: response.firstName,
      last_name: response.lastName,
      email: response.email,
      password: response.password,
      password_confirmation: response.passwordConfirmation,
      phone_number: response.phoneNumber,
      email: response.email,
      science_degree: response.scienceDegree,
      university_id: response.universityId,
    });
    fullDomen+='api/teachers';
  }
  if (response.role === 'student') {
    data = JSON.stringify({
      first_name: response.firstName,
      last_name: response.lastName,
      email: response.email,
      group_id: response.group,
      password: response.password,
      password_confirmation: response.passwordConfirmation,
    });
    fullDomen+='api/students';
  }
  return fetch(fullDomen, {
    method: 'post',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: data,
  })
  .then(response => {
    console.log(response);
    if (response.status === 201) {
      dispatch({
        type: SUBMIT,
      });
      browserHistory.push('/');
    } else {
      browserHistory.push('registration/error');
    }
  })
};
