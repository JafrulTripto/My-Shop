import { combineReducers } from 'redux';
import setupReducer from './setupReducers';

export default combineReducers({
    data: setupReducer,
});