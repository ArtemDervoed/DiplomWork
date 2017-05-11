import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {URL} from './../../app.js';
import {
  SEND_QUIZ,
  FETCH_QUIZ,
} from './constants';

const token = JSON.parse(localStorage.getItem('auth_token'));

export const closeTest = response => dispatch => {
  browserHistory.push('/subjects')
}
export const sendQuiz = response => dispatch => {
  let url = `${URL}/api${response.location}`;

    return fetch(url, {
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
      },
      method: 'Post',
      body:JSON.stringify({quizer:response.quizer})
    })
  .then(request => {
    return request.json();
 })
 .then(json => {
   dispatch({
     type: SEND_QUIZ,
     result: json,
   })
})
}
export const fetchQuiz = response => dispatch => {
  return fetch(`${URL}/api${response.location}`, {
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
    dispatch({
      type: FETCH_QUIZ,
      quiz: json,
    })
  })
};
