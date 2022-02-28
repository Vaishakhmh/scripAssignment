
import {SET_CURRENT_USER} from './actionTypes';
import {IDS} from '../emps'

export const loginUser=(Id)=>(dispatch)=>{
    IDS.forEach((id)=>{
        if(Id===id.ID){
            window.localStorage.setItem('scrip',JSON.stringify(id));
            dispatch(set_current_user(id));
        }
    })
}

export const checkLoginUser=()=>dispatch=>{
    if(window.localStorage.key('scrip')){
        let user=window.localStorage.getItem('scrip');
        user=JSON.parse(user)
        dispatch(set_current_user(user))
    }
}

export const set_current_user=(data)=>({
    type:SET_CURRENT_USER,
    payload:data
})