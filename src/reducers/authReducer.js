import {SET_CURRENT_USER} from '../actions/actionTypes'

const initialState={
    isAuthenticated:false,
    user:''
}
const authReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_CURRENT_USER:{
            console.log(action);
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }
        }
        default:
            return state;
    }
}



export default authReducer;