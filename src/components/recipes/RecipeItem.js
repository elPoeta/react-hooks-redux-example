import React from 'react';
import {Link} from 'react-router-dom';
import {REMOVE_RECIPE} from '../../actions/types';
import {useDispatch} from 'react-redux';

const RecipeItem = ({recipe}) => {
    const dispatch = useDispatch();
    const {id, title, cookTime, servings} = recipe;
    const remove = () =>{
       dispatch({
           type: REMOVE_RECIPE,
           payload:{id}
       });
    }
    return (
        <div className="Recipe-card">
           <h2 className="RecipeForm-full">{title}</h2>
            <span><span role="img" aria-label="clock">🕒</span> {cookTime}</span>
            <span><span role="img" aria-label="people">👥</span> {servings}</span>
            <Link to={`/recipe/${id}`}><span role="img" aria-label="eye">👁️</span> View</Link>
            <button onClick={remove}><span role="img" aria-label="trash">🗑️</span> Delete</button>
        </div>
    )
}

export default RecipeItem;
