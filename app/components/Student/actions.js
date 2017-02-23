import {
  USER_NAME,
  EMAIL,
  GROUP
} from './constants';
export const userName = response => dispatch => {
  return dispatch({type: USER_NAME, userName: response })
};
export const email = response => dispatch => {
  return dispatch({type: EMAIL, email: response })
};
export const group = response => dispatch => {
  return dispatch({type: GROUP, group: response })
};
