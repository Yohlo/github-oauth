import { combineReducers } from 'redux';
import oauth from './oauth';
import loading from './loading';

const rootReducer = combineReducers({
    loading,
    oauth
});

export default rootReducer;