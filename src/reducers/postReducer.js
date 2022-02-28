import {SET_ALL_POSTS,SET_FEATURED_POST,ADD_NEW_POST} from '../actions/actionTypes'
import { setNewPost } from '../actions/postActions'


const initialState={
   featuredPost:{},
   allPosts:[]
}


const postsReducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_ALL_POSTS:{
            return{
                ...state,
                allPosts:action.payload
            }
        }
        case SET_FEATURED_POST:{
            return {
                ...state,
                featuredPost:action.payload
            }
        }
        case ADD_NEW_POST:{
            let posts=state.allPosts;
            posts.push(action.payload);
            return{
                ...state,
                allPosts:posts
            }
        }

        default:return state;
    }
}

export default postsReducer;