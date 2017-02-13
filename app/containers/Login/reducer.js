/*
 *
 * Login reducer
 *
 */
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {
  LOGIN,
} from './constants';

function loginReducer(state = {
  isAuthenticated: false,
  mail:'',
}, action) {
  switch (action.type) {
    case LOGIN:
      return {...state, isAuthenticated: action.isAuthenticated};
    default:
      return state;
  }
}

export default combineReducers({
  routing: routerReducer,
  loginReducer,
});
