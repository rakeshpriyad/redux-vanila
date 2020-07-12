import {createStore, combineReducers} from 'redux';
import reducer from '../reducers/reducer'
import userReducer from '../reducers/userReducer'

//const store = createStore(reducer);
const store = createStore(combineReducers({reducer,userReducer}));

export default store;
