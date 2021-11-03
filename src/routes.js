import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Cards from './pages/Cards/Cards';
import Forms from './pages/Forms/Forms';
import Blocks from './pages/Blocks/Blocks';
import Pricing from './pages/Pricing/Pricing';

export const Routes = () => {
    return (
        <Switch>
        <>
        <Route path="/" component={Main} exact/>
        <Route path = "/cards" component={Cards} />
        <Route path = "/forms" component={Forms} />
        <Route path = "/blocks" component={Blocks} />
        <Route path="/pricing" component={Pricing} />
        </>
        </Switch>
    )
}