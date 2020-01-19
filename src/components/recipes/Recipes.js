import React from 'react';
import {useSelector} from 'react-redux';
import RecipeItem from './RecipeItem';
import './recipe.css'
const Recipes = () => {
    const {recipes} = useSelector(state =>(state.recipe))
    return (
        <div className="Recipe">
                 {recipes.length ? 
                     recipes.map( recipe => (
                         <RecipeItem  
                           key={recipe.id}
                           recipe={recipe}/>
                     ))
                  : <h3>Sorry not recipes yet :( ...</h3>}
        </div>
    )
}

export default Recipes;
