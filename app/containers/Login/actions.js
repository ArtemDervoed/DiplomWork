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
  LOGIN
} from './constants';

export const login = response => dispatch => {
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
  .then(response => response.json())
  .then(json => {
    localStorage.setItem('auth_token', JSON.stringify(json.auth_token));
    dispatch({
      type: LOGIN,
      isAuthenticated: JSON.parse(localStorage.getItem('auth_token')) !== undefined || '',
    });
    browserHistory.push('/');
  });
};
