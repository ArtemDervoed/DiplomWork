/*
 *
 * Registration reducer
 *
 */
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import { fromJS } from 'immutable';
import {
  SUBMIT,
} from './constants';

function submit(state = { successfull: false,}, action) {
  switch (action.type) {
    case SUBMIT:
      return {...state, successfull: action.successfull};
    default:
      return state;
  }
}
export default combineReducers({
  routing: routerReducer,
  submit,
});
