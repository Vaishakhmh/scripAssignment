import {SET_FEATURED_POST,SET_ALL_POSTS,ADD_NEW_POST} from './actionTypes'
import axios from 'axios'


export const getFeaturedPost=()=>async (dispatch)=>{
    const posts=await axios.get('https://scripbox-e3dc2-default-rtdb.firebaseio.com/Posts.json?auth=dQapjidUPHsLss8kqwK7PufzXR4uFXymrsf8AJIA')
    const max = posts.data.reduce((prev, current) => (parseInt(prev.likes) > parseInt(current.likes)) ? prev : current)  
    dispatch(setFeaturedPost(max));
} 

export const getAllPosts=(filter)=>async (dispatch)=>{
    let Posts=await axios.get('https://scripbox-e3dc2-default-rtdb.firebaseio.com/Posts.json?auth=dQapjidUPHsLss8kqwK7PufzXR4uFXymrsf8AJIA')
    if(!filter){
    dispatch(setAllPosts(Posts.data));
    }else{
        const posts=Posts.data.filter((post)=>post.category===filter.title)
        dispatch(setAllPosts(posts));
    }
}

export const addNewPost=(post)=>async (dispatch,getState)=>{
    const posts=[...getState().postsReducer.allPosts];
    posts.push(post);
    await axios.put('https://scripbox-e3dc2-default-rtdb.firebaseio.com/Posts.json?auth=dQapjidUPHsLss8kqwK7PufzXR4uFXymrsf8AJIA',posts)
    dispatch(setNewPost(post));
}

export const setNewPost=(post)=>({
    type:ADD_NEW_POST,
    payload:post
})

export const setFeaturedPost=(post)=>({
    type:SET_FEATURED_POST,
    payload:post
})

export const setAllPosts=(posts)=>({
    type:SET_ALL_POSTS,
    payload:posts
})