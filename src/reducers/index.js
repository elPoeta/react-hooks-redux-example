import { combineReducers } from 'redux'
import {authorReducer} from './authorReducer';

const rootReducer = combineReducers({
    author: authorReducer
})

export default rootReducer;