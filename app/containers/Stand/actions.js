import {
  CHANGE_REGISTER_STATE,
  CHANGE_ADDER_STATE,
  CHANGE_OPERATION_VALUE,
  CHANGE_VARIABLE
} from './constants';

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
    payload: response,
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
