import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, RouteProps } from 'react-router-dom'

import { Login } from './components/Auth/Login'
import { Dashboard } from './components/pages/Dashboard/Dashboard'
import { PageAllTransactions } from './components/pages/Transactions/PageAllTransactions'
import { PageWrapper } from './components/PageWrapper/PageWrapper'

export const ProtectedRoute = (props: RouteProps) => {
    const token = localStorage.getItem('Token')
    return token ? (
        <PageWrapper>
            <Route {...props} />
        </PageWrapper>
    ) : (
        <Redirect to="/login" />
    )
}

export const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/login" exact component={Login} />
                <ProtectedRoute path="/dashboard" component={Dashboard} />
                <ProtectedRoute path="/transaction" component={PageAllTransactions} />
            </Switch>
        </BrowserRouter>
    )
}
