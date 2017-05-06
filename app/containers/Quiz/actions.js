import fetch from 'isomorphic-fetch';
import {push} from 'react-router-redux';
import {browserHistory} from 'react-router';
import {URL} from './../../app.js';

import {
  SEND_QUIZ,
} from './constants';
export const sendQuiz = response => dispatch => {
  browserHistory.push('/');
  return { type: SEND_QUIZ }
}
