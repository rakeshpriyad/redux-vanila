import * as acttions from '../actions/actionCreators'
const insState =[]
let lastId = 0;
const userReducer = (state = insState, action) =>{
    if(action.type === acttions.ADD_USER){
        console.log(action);
        return [
            ...state,
            {
                id: ++lastId,
                name: action.payload.name,
                age: action.payload.age,
                salary: action.payload.salary,
            }
        ]
    }else if(action.type === acttions.UPDATE_USER){
        console.log("=update=="+state)
        return state.map((user) => {
            if (user.id === action.payload.id) {
                return {
                    ...user,
                    ...action.payload
                };
            } else {
                return user;
            }
        });
    }else if(action.type === acttions.FIND_USERS){
        console.log("=find=="+state)
        //return state.filter( user => user.id === action.payload.id)
        return state;
    }else if(action.type === acttions.DELETE_USER){
        return state.filter( user => user.id !== action.payload.id)
    }

    return state;
}

export default userReducer;