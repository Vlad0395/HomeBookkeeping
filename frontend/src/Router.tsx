import React from 'react';
import { BrowserRouter, Switch, Route, Link, Redirect, RouteProps } from 'react-router-dom';

import { Login } from './components/Auth/Login';
import { Dashboard } from './components/pages/Dashboard/Dashboard'


export const ProtectedRoute = (props: RouteProps) => {
  const token = localStorage.getItem('Token');
  return token ? <Route {...props} /> : <Redirect to='/login'/>;
};

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact component={Login} />
        <ProtectedRoute path='/dashboard' component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  );
};
