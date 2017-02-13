/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { fromJS } from 'immutable';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';

const auth = (state = {
  isAuthenticated: false,
}, action) => {
  switch (action.type) {
    case 'LOGOUT':
      return {...state, isAuthenticated: action.isAuthenticated};
    case 'LOGIN':
      return {...state, isAuthenticated: action.isAuthenticated};
    default:
      return state;
  }
};
export default combineReducers({
  routing: routerReducer,
  auth,
});
