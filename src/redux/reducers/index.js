import { combineReducers } from 'redux';
import alert from './alert';
import web3 from './web3';
import user from './user';

export default combineReducers({
    web3,
    alert,
    user,
});