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
  LOGIN,
  REGISTRATION,
  GO_TO_USER
} from './constants';
const domen = 'https://serene-hamlet-19929.herokuapp.com';
export const logout = () => dispatch => {
  localStorage.removeItem('auth_token');
  localStorage.removeItem('user');
  localStorage.removeItem('user_id');
  dispatch({
    type: LOGOUT,
    isAuthenticated: false,
  });
  browserHistory.push('/');
};
export const login = () => dispatch => {
  dispatch({
    type: LOGIN,
    isAuthenticated: false,
  });
  browserHistory.push('login');
};
export const registration = () => dispatch => {
  dispatch({
    type: REGISTRATION,
    isAuthenticated: false,
  });
  browserHistory.push('registration');
};
export const goToUserRoom = () => dispatch =>{
  dispatch({
    type: GO_TO_USER,
  });
  browserHistory.push('user');

}
