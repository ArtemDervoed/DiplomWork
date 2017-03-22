import {
  TOGGLE_VAR_A_ADDER_0,
  TOGGLE_VAR_B_ADDER_0,
  SET_TRANSFER_ADDER_0,
  SET_INPUT_TRANSFER_ADDER_0,
  SET_SUMM_ADDER_0,

  TOGGLE_VAR_A_ADDER_1,
  TOGGLE_VAR_B_ADDER_1,
  SET_TRANSFER_ADDER_1,
  SET_INPUT_TRANSFER_ADDER_1,
  SET_SUMM_ADDER_1,

  TOGGLE_VAR_A_ADDER_2,
  TOGGLE_VAR_B_ADDER_2,
  SET_TRANSFER_ADDER_2,
  SET_INPUT_TRANSFER_ADDER_2,
  SET_SUMM_ADDER_2,

  TOGGLE_VAR_A_ADDER_3,
  TOGGLE_VAR_B_ADDER_3,
  SET_TRANSFER_ADDER_3,
  SET_INPUT_TRANSFER_ADDER_3,
  SET_SUMM_ADDER_3,

  TOGGLE_VAR_A_ADDER_4,
  TOGGLE_VAR_B_ADDER_4,
  SET_TRANSFER_ADDER_4,
  SET_INPUT_TRANSFER_ADDER_4,
  SET_SUMM_ADDER_4,

  TOGGLE_VAR_A_ADDER_5,
  TOGGLE_VAR_B_ADDER_5,
  SET_TRANSFER_ADDER_5,
  SET_INPUT_TRANSFER_ADDER_5,
  SET_SUMM_ADDER_5,

  TOGGLE_VAR_A_ADDER_6,
  TOGGLE_VAR_B_ADDER_6,
  SET_TRANSFER_ADDER_6,
  SET_INPUT_TRANSFER_ADDER_6,
  SET_SUMM_ADDER_6,
  
  TOGGLE_VAR_A_ADDER_7,
  TOGGLE_VAR_B_ADDER_7,
  SET_TRANSFER_ADDER_7,
  SET_INPUT_TRANSFER_ADDER_7,
  SET_SUMM_ADDER_7,
} from './constants';
export const toggleVarA = response => dispatch =>{
  dispatch({
    type: TOGGLE_VAR_A,
    payload: response,
  });
}

export const toggleVarB = response => dispatch =>{
  dispatch({
    type: TOGGLE_VAR_B,
    payload: response,
  });
}

export const setTransfer = response => dispatch =>{
  dispatch({
    type: SET_TRANSFER,
    payload: response,
  });
}
export const setInputTransfer = response => dispatch =>{
  dispatch({
    type: SET_INPUT_TRANSFER,
    payload: response,
  });
}

export const setSumm = response => dispatch =>{
  dispatch({
    type: SET_SUMM,
    payload: response,
  });
}
