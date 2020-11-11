import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  
import { Login } from './components/Auth/Login';


  export const Router = () => {
      return (
          <BrowserRouter>
              <Switch >
                  <Route path='/login' exact component={Login} />
              </Switch>
          </BrowserRouter>
      )
  }
  