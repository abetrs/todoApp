import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Todos from './Todos/Todos.js';
import Signup from './Signup/Signup';
import Login from './Login/Login';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path="/" component={Todos}/>
      <Route path="/signup" component={Signup} />
      <Route path="/login"  component={Login} />
    </Switch>
  </div>
);

export default Routes;