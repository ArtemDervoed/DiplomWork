import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {URL} from './../../app.js';
import {
  FETCH_THEME,
  BEGIN_STAND,
} from './constants';
const token = JSON.parse(localStorage.getItem('auth_token'));

export const fetchTheme = payload => dispatch => {
  return fetch(URL + `/api/subjects/${payload.subjectId}/themes/${payload.themeId}`, {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_THEME,
        theme: json,
      })
    });
};

export const beginStand = response => dispatch => {
  if (response.status === 'not_started') {
      return fetch(`${URL}/api${response.location}/stand`, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
        },
        method: 'Post',
      })
    .then(request => {
        browserHistory.push(`${response.location}/stand`);
      return request.json();
   });
  }
  if (response.status === 'not_passed') {
    return fetch(`${URL}/api${response.location}/stand`, {
      method: 'Get',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
         Authorization: 'Token ' + token,
      },
    })
      .then(response => response.json())
      .then(json => {
          browserHistory.push(`${response.location}/stand`);
        console.log(json);
        // dispatch({
        //   type: FETCH_SUBJECTS,
        //   subjects: json,
        // })
      })
  }
};