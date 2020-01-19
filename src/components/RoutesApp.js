import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from '../components/Home';
import NotFound from './NotFound';
import Recipes from './recipes/Recipes';
import RecipeForm from './recipes/RecipeForm';
import Login from './author/Login';
import RecipeDetail from './recipes/RecipeDetail';

const RoutesApp = () => {
    return (
          <Switch>
              <Route exact path="/" component={Home} /> 
              <Route path="/recipes" component={Recipes} /> 
              <Route path="/createrecipe" component={RecipeForm} /> 
              <Route path="/login" render={props => <Login {...props}/>} />
              <Route path="/recipe/:id" component={RecipeDetail} />  
              <Route component={NotFound}/>
          </Switch>
    )
}

export default RoutesApp;
