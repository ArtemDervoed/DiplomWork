import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
const domen = 'https://serene-hamlet-19929.herokuapp.com';
import {
  FETCH_THEMES
} from './constants';
const token = JSON.parse(localStorage.getItem('auth_token'));

export const fetchSubjects = response => dispatch => {
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/subjects' + response, {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_THEMES,
        subjects: json,
      })
    });
};
