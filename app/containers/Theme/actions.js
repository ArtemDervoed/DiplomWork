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
  return fetch(URL + '/api/subjects', {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      let subject = '';
      let theme = '';
        for (var key in json) {
          if (json.hasOwnProperty(key)) {
            if (json[key].id == payload.subjectId) {
              subject = key;
              theme = json[key].themes.map((theme, id) => {
                if (theme.id == payload.themeId) {
                  return id;
                }
              })
            }
          }
        }
        theme = theme.filter((item)=> {
          return item!== undefined
        })[0];
      dispatch({
        type: FETCH_THEME,
        theme: json[subject].themes[theme],
      })
    });
};

export const beginStand = response => dispatch => {
  browserHistory.push(`${response.location}/stand`);
};
