import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import App from './App.js';
import CreateNew from './components/CreateNew.js';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={App} />
                <Route path='/createnew' exact component={CreateNew} />
            </Switch>
        
        </BrowserRouter>
    )
}

export default Routes;