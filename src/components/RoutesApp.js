import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from '../components/Home';
import NotFound from './NotFound';
import Recipes from './recipes/Recipes';
import RecipeForm from './recipes/RecipeForm';
import Login from './author/Login';

const RoutesApp = () => {
    return (
          <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/recipes" component={Recipes} /> 
              <Route path="/createrecipe" component={RecipeForm} /> 
              <Route path="/login" component={Login} /> 
              <Route component={NotFound}/>
          </Switch>
    )
}

export default RoutesApp;
