import { combineReducers } from 'redux';
import alert from './alert';
import web3 from './web3';
import user from './user';
import categories from './categories';
import blog from './blog';

export default combineReducers({
    web3,
    alert,
    user,
    categories,
    blog,
});