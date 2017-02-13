/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import combineReducers from './reducers';
import logger from 'redux-logger';


export const middleware = applyMiddleware(thunk, logger());
export const store = createStore(combineReducers, middleware);
