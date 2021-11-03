import React from 'react';
import { Switch, Route } from 'react-router-dom'

import Dashboard from './pages/Dashboard';

export const Routes = () => {
    return {
        <Switch>
        <Route path = "/" component={Dashboard} exact />
        // <Route path = "/cards" component={Cards} />
        // <Route path = "/pricing" component={Pricing} />
        // <Route path = "/blocks" component={Blocks} />
        // <Route path = "/forms" component={Forms} />
        </Switch>
    }
}