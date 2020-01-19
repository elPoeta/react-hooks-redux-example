import {LOGIN_AUTHOR} from '../actions/types';
const initialState = {
    isAuthenticated: false,
    author: {}
  };

export const authorReducer = (state = initialState,action) =>{
    switch(action.type) {
        case LOGIN_AUTHOR :
            return {
                ...state,
                isAuthenticated: action.payload.isAuthenticated,
                author: action.payload.author
            }
        default:
            return state;
    }
}