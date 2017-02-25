/*
 *
 * Login actions
 *
 */
import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
const domen = 'https://serene-hamlet-19929.herokuapp.com';
import {
  SEND_LOGIN
} from './constants';

export const login = response => dispatch => {
  let status = null;
  const data = JSON.stringify({
    role: response.role,
    email: response.email,
    password: response.password,
  });
  return fetch(`${domen}/api/login`, {
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
      localStorage.setItem('auth_token', JSON.stringify(json.auth_token));
      localStorage.setItem('user', JSON.stringify(response.role));
      localStorage.setItem('user_id', JSON.stringify(json.user_id));
      dispatch({
        type: SEND_LOGIN,
        role: response.role,
      });
      browserHistory.push('/');
    } else {
      browserHistory.push('/login/error');
    }
  });
};
