import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './components/cards/Main';
import Cards from './pages/Cards';
import Forms from './pages/Forms';
import Blocks from './pages/Blocks';

export const Routes = () => {
    return (
        <Switch>
        <>
        <Route path="/" component={Main} exact/>
        <Route path = "/cards" component={Cards} />
        <Route path = "/forms" component={Forms} />
        <Route path = "/blocks" component={Blocks} />
        {/*
        <Route path="/pricing" component={Pricing} />
        
         */}
        </>
        </Switch>
    )
}