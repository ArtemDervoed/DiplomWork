import {
  CHANGE_REGISTER_STATE,
  CHANGE_ADDER_STATE,
  CHANGE_OPERATION_VALUE,
  SET_ALU_ADDRESS,
  CHANGE_VARIABLE,
  CHANGE_CHART,
  WRITE_MODE,
  SET_WORD,
  PROGRAMM_MODE,
  SET_ALU_WORD,
  FETCH_TASK,
  GET_TASK,
  PASS_STAND,
} from './constants';
import {browserHistory} from 'react-router';
import {URL} from './../../app.js';

const token = JSON.parse(localStorage.getItem('auth_token'));

export const passStand = response => dispatch => {
    let url = `${URL}/api${response.location}`;
      return fetch(url, {
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          Authorization: 'Token ' + token,
        },
        method: 'Post',
      })
    .then(request => {
      browserHistory.push(`/subjects`);
   });
 }
export const getTask = response => dispatch => {
  return fetch(`${URL}/api${response.location}`, {
    method: 'Get',
    credentials: 'include',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
       Authorization: 'Token ' + token,
    },
  })
  .then(response => response.json())
  .then(json => {
    dispatch({
      type: GET_TASK,
      task: json,
    })
  })
};

export const setAluWord = response => dispatch => {
  let wordObj = {r_0:false,r_1:false,r_2:false,r_3:false,r_4:false,r_5:false,r_6:false,r_7:false,}
  for (let i = 0; i < response.word.length; i++) {
     wordObj['r_'+ i] = (response.word[i] == 1) ? true:false;
  }
  dispatch({
    type: SET_ALU_WORD,
    address: response.address,
    word: wordObj,
  });
}
export const setAluAddress = response => dispatch => {
  dispatch({
    type: SET_ALU_ADDRESS,
  });
}

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
