import { combineReducers } from 'redux'
import {authorReducer} from './authorReducer';
import recipe from './recipeReducer';

const rootReducer = combineReducers({
    author: authorReducer,
    recipe
})

export default rootReducer;