import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import App from './App';
const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/instructions/howitworks' exact component={App} />
                <Route path='/instructions/:id' exact component={App} />

            </Switch>
        </BrowserRouter>
    )
}

export default Routes
