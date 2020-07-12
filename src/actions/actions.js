import * as actions from './actionCreators'

/* export const createUser = (name, age, salary) => { name, age, salary }

export const addUser = (user) => {
    return {
        type: actions.ADD_USER,
        payload: user
    }
}

export const updateUser = (user) => {
    return {
        type: actions.UPDATE_USER,
        payload: user
    }
}

export const removeUser = (id) => {
    return {
        type: actions.DELETE_USER,
        payload: id
    }
}

export const findUser = (id) => {
    return {
        type: actions.ADD_USER,
        payload: id
    }
}

 */
export function bugAdd(description){
    return {
        type: actions.BUG_ADDED,
        payload: {
            description: description,
            resolved: true
        }
    }
}


export function bugRemove(id){
    return{
    type: actions.BUG_REMOVED,
    payload: {
        id: id
    }
}
}