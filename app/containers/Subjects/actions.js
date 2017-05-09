import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {URL} from './../../app.js';
import {
  FETCH_SUBJECTS,
  BEGIN_SUBJECT,
  BEGIN_THEME,
} from './constants';
const token = JSON.parse(localStorage.getItem('auth_token'));

export const fetchSubjects = response => dispatch => {
  return fetch(URL + '/api/subjects', {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_SUBJECTS,
        subjects: json,
      })
    });
};


export const beginTheme = response => dispatch => {
  let status = null;
    const data = JSON.stringify({
      subject_id:response.subjectId,
      theme_id:response.themeId,
    });
    return fetch(`${URL}/api/studied_themes`, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
      },
      method: 'Post',
      body: data,
    })
  .then(request => {
      dispatch({
        type: BEGIN_THEME,
      });
      browserHistory.push(`/subjects/${response.subjectId}/themes/${response.themeId}`);
  })
};
export const exploreTheme = response => dispatch => {
  browserHistory.push(`/subjects/${response.subjectId}/themes/${response.themeId}`);
};
