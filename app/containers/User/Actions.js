import {
  EDIT
} from './constants';
export const edit = response => dispatch => {
  return dispatch({type: EDIT, data: response })
};
