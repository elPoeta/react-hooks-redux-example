import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {ADD_RECIPE} from '../../actions/types';
import './recipeForm.css';

const RecipeForm = () => {
  const {author} = useSelector((state) => (state.author))
  const dispatch  = useDispatch();
  const [title, setTitle] = useState('');
  const [cookTime, setCookTime] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [servings, setServings] = useState('');
   
  const handleSubmit = e =>{ 
     e.preventDefault();
     const recipe = {
      title,
      ingredients: ingredients.trim().split('\n'),
      cookTime,
      servings,
      author
     }
     dispatch(
       {
         type:ADD_RECIPE, 
         payload: {
           recipe
         }
        })
        setTitle('');
        setIngredients('');
        setServings('');
        setCookTime('');
  }

  return (
    <div className="RecipeForm">
      <h2>Create Recipe</h2>
      <form onSubmit={handleSubmit}> 
        <input className="RecipeForm-full" type="text" name="title" placeholder="Title"  value={title} onChange={e => setTitle(e.target.value)} required />
        <textarea className="RecipeForm-full" rows="10" placeholder="Ingredients" value={ingredients} onChange={e=> setIngredients(e.target.value)} required/>
        <input type="number" name="cookTime" placeholder="Cook Time" value={cookTime}  onChange={e => setCookTime(e.target.value)} required />
        <input type="number" name="servings" placeholder="Servings" value={servings} onChange={e=> setServings(e.target.value)} required />
        <input className="RecipeForm-full RecipeForm-btnSubmit" type="submit" value="add recipe" />
      </form>
    </div>
  )
}

export default RecipeForm;