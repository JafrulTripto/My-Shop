import { combineReducers } from 'redux';
import setupReducer from './setupReducers';
import ModuleReducers from './ModuleReducers'

export default combineReducers({
    data: setupReducer,
    supplierData:ModuleReducers
});