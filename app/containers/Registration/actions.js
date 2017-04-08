import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
const domen = 'https://serene-hamlet-19929.herokuapp.com';
import {
  SUBMIT,
  FETCH_GROUPS
} from './constants';

export const fetchGroups = response => dispatch => {
  return fetch(`${domen}/api/groups`, {
    method: 'Get',
  })
    .then(response => response.json())
    .then(json => dispatch({type: FETCH_GROUPS, payload: json}));
};

export const registration = response => dispatch => {
  let status = null;
    const data = JSON.stringify(response);
    return fetch(`${domen}/api/registration`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      method: 'Post',
      body: data,
    })
  .then(response => {
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
