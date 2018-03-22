
import { combineReducers } from 'redux';
import auth from './loginReducers';

const allReducers = combineReducers({
    auth,
});
export default allReducers;