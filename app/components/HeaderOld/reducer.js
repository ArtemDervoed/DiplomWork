/*
 *
 * Login reducer
 *
 */
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {
  LOGOUT,
} from './constants';

const auth = (state = {
  isAuthenticated: false,
  mail:'',
}, action) => {
  switch (action.type) {
    case LOGOUT:
      return {...state, isAuthenticated: action.isAuthenticated};
    default:
      return state;
  }
};

export default combineReducers({
  routing: routerReducer,
  auth,
});
