/*
 *
 * Login actions
 *
 */
import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';

import {
  LOGOUT,
  LOGIN
} from './constants';
const domen = 'https://serene-hamlet-19929.herokuapp.com';
export const logout = () => dispatch => {
  localStorage.removeItem('auth_token');
  dispatch({
    type: LOGOUT,
    isAuthenticated: false,
  });
  browserHistory.push('/');
};
