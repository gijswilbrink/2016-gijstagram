/**
 * Import framework
 */
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

/**
 * Import reducers
 */
import posts from './posts';
import comments from './comments';

/**
 * Combine all reducers in a single reducer
 * Redux only accepts a single reducer
 */
const rootReducer = combineReducers({posts, comments, routing: routerReducer});

/**
 * Export
 */
export default rootReducer;