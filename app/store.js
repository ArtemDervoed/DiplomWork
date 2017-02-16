/**
 * Create the store with asynchronously loaded reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { fromJS } from 'immutable';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import combineReducers from './reducers';
import logger from 'redux-logger';
import { routerMiddleware, push } from 'react-router-redux'
const router = routerMiddleware(browserHistory)
export const middleware = applyMiddleware(thunk, logger(), router);
export const store = createStore(combineReducers, middleware);
