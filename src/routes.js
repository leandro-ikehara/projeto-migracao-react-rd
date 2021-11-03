import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/cards/Main';
import Cards from './pages/Cards';

export const Routes = () => {
    return (
        <Switch>
        <>
        <Route path="/" component={Main} exact/>
        <Route path = "/cards" component={Cards} />
        {/*
        <Route path="/pricing" component={Pricing} />
        <Route path = "/blocks" component={Blocks} />
        <Route path = "/forms" component={Forms} /> */}
        </>
        </Switch>
    )
}