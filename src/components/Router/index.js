import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";
import Fancybox from '../../pages/feed/modals/fancybox';

import {routes} from './router'  

const BasicRoutes = () => (
    
    <Router>
        <Switch>
            {routes.map((route, i) => ( 
                <Route key={i} exact path={route.path} render={props => <route.component {...props} /> } />
            ))}
            <Route path="/fancy" component={Fancybox}/>
        </Switch>
    </Router>
)

export default BasicRoutes;