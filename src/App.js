import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';


import Homescreen from './Routes/Homescreen/Homescreen';
import Signup from './Routes/Signup/Signup';
import Login from './Routes/Login/Login';
import Product from './Routes/Product/Product';


function App() {
  
  return (
      <Switch>
        <Route exact path='/' component={Homescreen} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/product/:id' component={Product} />
      </Switch>
  );
}

export default App;
