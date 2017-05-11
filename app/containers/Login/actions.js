import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {URL} from './../../app.js';
import { loginUser } from '../../utils/token.js'
import {
  SEND_LOGIN,
  REDIRECT_TO_HOME
} from './constants';
export const redirectToHome = response => dispatch => {
  browserHistory.push('/');
  return { type: REDIRECT_TO_HOME }
}
export const login = response => dispatch => {
  let status = null;
  const data = JSON.stringify({
    role: response.role,
    email: response.email,
    password: response.password,
  });
  return fetch(`${URL}/api/login`, {
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
      loginUser({
        isAuthenticated: true,
        authToken: json.auth_token,
        role: response.role,
        userId: json.user_id,
      })
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
