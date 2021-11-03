import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';

import Dashboard from './pages/Home';

export const Routes = () => {
    return (
        <Switch>
        <>
        <Route path="/" component={Home} />
        {/* <Route path = "/cards" component={Cards} />
        <Route path="/pricing" component={Pricing} />
        <Route path = "/blocks" component={Blocks} />
        <Route path = "/forms" component={Forms} /> */}
        </>
        </Switch>
    )
}