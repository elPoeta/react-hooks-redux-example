import React from 'react';
import {Switch, Route} from 'react-router-dom'; 
import Home from '../components/Home';
import NotFound from './NotFound';

const RoutesApp = () => {
    return (
          <Switch>
              <Route exact path="/" component={Home} /> 
              <Route component={NotFound}/>
          </Switch>
    )
}

export default RoutesApp;
