import {ADD_RECIPE, REMOVE_RECIPE} from '../actions/types';
import uuid from 'uuid/v4';
const initialState = {
    recipes:[{id:1,title:"Recipe Title", ingredients: ["3 palta","5 tomatto","salt"],cookTime:15, servings: 2, author:"@elPoeta"}],
    recipe: {}
}

const recipeReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_RECIPE:
            return {
                ...state,
                recipes:[...state.recipes, {
                id: uuid(),
                title: action.payload.recipe.title,
                ingredients: action.payload.recipe.ingredients,
                cookTime: action.payload.recipe.cookTime,
                servings: action.payload.recipe.servings,
                author: action.payload.recipe.author
              }]
            }
              case REMOVE_RECIPE:
                return {
                    ...state,
                    recipes:state.recipes.filter(recipe => recipe.id !== action.payload.id)
                }
              default:
                  return state
    }
}

export default recipeReducer;
