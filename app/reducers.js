/**
 * Combine all reducers in this file and export the combined reducers.
 * If we were to do this in store.js, reducers wouldn't be hot reloadable.
 */
import { fromJS } from 'immutable';
import {routerReducer} from 'react-router-redux';
import {combineReducers} from 'redux';
import {authorization} from 'components/header/reducer.js'
import {student} from 'components/Student/reducer.js'
import {teacher} from 'components/Teacher/reducer.js'
import {sendLogin} from 'containers/Login/reducer.js'
import {submit} from 'containers/Registration/reducer.js'

export default combineReducers({
  routing: routerReducer,
  authorization,
  sendLogin,
  submit,
  student,
  teacher
});
