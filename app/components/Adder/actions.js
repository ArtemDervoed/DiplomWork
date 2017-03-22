import {
  SET_TRANSFER,
  SET_SUMM
} from './constants.js';
export const setTransfer = response => dispatch =>{
  dispatch({
    type: SET_TRANSFER,
    payload: response,
  });
}

export const setSumm = response => dispatch =>{
  dispatch({
    type: SET_SUMM,
    payload: response,
  });
}
