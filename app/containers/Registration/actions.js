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
  SUBMIT
} from './constants';

export const registration = response => dispatch => {
  let data = '';
  let fullDomen = domen;
  let status = null;
  if (response.role === 'teacher') {
    data = JSON.stringify({
      name: response.name,
      email: response.email,
      password: response.password,
      password_confirmation: response.passwordConfirmation,
      phone_number: response.phoneNumber,
      email: response.email,
      science_degree: response.scienceDegree,
      university_id: response.universityId
    });
    fullDomen+='api/teachers';
  }
  if (response.role === 'student') {
    data = JSON.stringify({
      name: response.name,
      email: response.email,
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
    status = response.status;
    return response.json()
  })
  .then(json => {
    if (status === 200) {
      dispatch({
        type: SUBMIT,
      });
      browserHistory.push('registration/successfull');
    } else {
      browserHistory.push('registration/error');
    }
  });
};
