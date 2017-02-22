import {
  USER_NAME,
  EMAIL,
  PHONE_NUMBER,
  SCIENCE_DEGREE,
  UNIVERSITY,
  UPDATE
} from './constants';
export const userName = response => dispatch => {
  return dispatch({type: USER_NAME, userName: response })
};
export const email = response => dispatch => {
  return dispatch({type: EMAIL, email: response })
};
export const phoneNumber = response => dispatch => {
  return dispatch({type: PHONE_NUMBER, phoneNumber: response })
};
export const scienceDegree = response => dispatch => {
  return dispatch({type: SCIENCE_DEGREE, scienceDegree: response })
};
export const university = response => dispatch => {
  return dispatch({type: UNIVERSITY, university: response })
};
export const update = response => dispatch => {
  console.log(this);
  return dispatch({type: UPDATE})
};
