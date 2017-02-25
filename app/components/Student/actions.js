import {
  USER_NAME,
  EMAIL,
  GROUP,
  UPDATE,
  REDIRECT_HOME
} from './constants';
import { browserHistory } from 'react-router';

export const userName = response => dispatch => {
  return dispatch({type: USER_NAME, userName: response })
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
export const update = response => dispatch => {
  let userId = JSON.parse(localStorage.getItem('user_id'));
  console.log(userId);
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/students/' + userId, {
    method: 'Get',
    headers: {
       Authorization: "Token Awc3jmMcQn1xUMfln2SqwQ==",
    },
  })
    .then(response => response.json())
    .then(json => dispatch({type: UPDATE, payload: json}));
};
