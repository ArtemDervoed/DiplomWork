import {
  CHANGE_REGISTER_STATE,
  CHANGE_ADDER_STATE,
  CHANGE_OPERATION_VALUE,
  CHANGE_VARIABLE,
  CHANGE_CHART,
  WRITE_MODE,
  SET_WORD,
  PROGRAMM_MODE,
} from './constants';

export const writeMode = response => dispatch =>{
  dispatch({
    type: WRITE_MODE,
    write: response,
  });
}

export const workMode = response => dispatch =>{
  dispatch({
    type: PROGRAMM_MODE,
    hard: response,
  });
}

export const setWord = response => dispatch =>{
  dispatch({
    type: SET_WORD,
    word: response.word,
    address:response.address,
  });
}

export const changeRegisterState = response => dispatch =>{
  dispatch({
    type: CHANGE_REGISTER_STATE,
    name: response.name,
    pinType: response.pinType,
    pin: response.pin,
    value: response.value,
  });
}

export const changeAdderState = response => dispatch =>{
  dispatch({
    type: CHANGE_ADDER_STATE,
    name: response.name,
    part: response.part
  });
}
export const changeOperationValue = response => dispatch =>{
  dispatch({
    type: CHANGE_OPERATION_VALUE,
    name: response.name,
    pin: response.pin,
    value: response.value,
  });
}
export const changeVariable = response => dispatch =>{
  dispatch({
    type: CHANGE_VARIABLE,
    name: response.name,
    pinType: response.pinType,
    pin: response.pin,
    value: response.value,
  });
}
export const changeChart = response => dispatch =>{
  dispatch({
    type: CHANGE_CHART,
    value: response,
  });
}
