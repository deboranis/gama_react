import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Repositories from './Pages/Repositories/Repositories';
import Home from './Pages/Home/Home';

export default function Routes() {
    return(
        <Switch>
            {/* o switch altera as rotas */}
            <Route path='/repositories' component={Repositories} />
            <Route exact path='/' component={Home} />
            {/* o exact previne que o roteador pare na /, direcionando assim para a home */}
        </Switch>
    )
}