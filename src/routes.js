import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from './pages/main';
import Investimento from './pages/investimento';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/:id" component={Investimento} />
        </Switch>
    </BrowserRouter>
);

export default Routes;