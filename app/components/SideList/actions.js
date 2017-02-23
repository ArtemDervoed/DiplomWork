import {
  UPDATE
} from './constants';
export const update = response => dispatch => {
  return dispatch({type: UPDATE, list: response })
};
