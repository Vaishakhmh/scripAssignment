import {combineReducers} from 'redux'

import authReducer from './authReducer';
import postsReducer from './postReducer'


const rootReducer= combineReducers({
    authReducer,
    postsReducer
})

export default rootReducer;