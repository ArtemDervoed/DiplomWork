/*
 *
 * Registration reducer
 *
 */
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import { fromJS } from 'immutable';
import {
  DEFAULT_ACTION,
} from './constants';

const initialState = fromJS({});

function registrationReducer(state = initialState, action) {
  switch (action.type) {
    case DEFAULT_ACTION:
      return state;
    default:
      return state;
  }
}
export default combineReducers({
  routing: routerReducer,
  registrationReducer,
});
