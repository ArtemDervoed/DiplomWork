import {
  EDIT,
  FETCH_TEACHER,
} from './constants';
export const edit = response => dispatch => {
  return dispatch({type: EDIT, data: response })
};
export const fetchTeacherData = response => dispatch => {
  let userId = JSON.parse(localStorage.getItem('user_id'));
  let token = JSON.parse(localStorage.getItem('auth_token'));
  return fetch('https://serene-hamlet-19929.herokuapp.com/api/teachers/' + userId, {
    method: 'Get',
    headers: {
       Authorization: 'Token ' + token,
    },
  })
    .then(response => response.json())
    .then(json => {
      dispatch({
        type: FETCH_TEACHER,
        email: json.email,
        name: json.name,
        phoneNumber: json.phoneNumber,
        scienceDegree: json.scienceDegree })
    });
};
