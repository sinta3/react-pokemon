import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';


import Login from './pages/Login/Login';
import Content from './pages/Content/Content';
import Detail from './pages/Content/Detail'
import PrivateRoute from './helpers/PrivateRoute/PrivateRoute';

import './App.css';



function App() {
 
  return (
    <Router>

      <Switch>

        <Route exact path="/">
          <Login/>
        </Route>

        <PrivateRoute exact path="/pokemons">
            <Content/>
        </PrivateRoute>
     
        <PrivateRoute exact path="/pokemons/:name">
            <Detail/>
        </PrivateRoute>

        </Switch>

    </Router>
  )
};
    

export default App;
