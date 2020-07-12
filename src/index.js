//import React from 'react';
import store from './store/configStore'
import {bugAdd, bugRemove} from './actions/actions'
import {addUser, updateUser, findUsers, removeUser,createUser} from './actions/userActions'

//console.log(store)
//console.log(store.getState())

store.subscribe( () => {console.log(store.getState())});
store.dispatch(bugAdd("Bug1"));
store.dispatch(bugRemove(1));

const user1 = createUser("rk", "35", "200K");
console.log(user1)
store.dispatch(addUser(user1));
const user2 = {...createUser("rakesh", "35", "200K"), id:1};

store.dispatch(updateUser(user2));
store.dispatch(findUsers(1));
store.dispatch(removeUser(1));

//store.dispatch(bugRemove(1));