import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
  } from "react-router-dom";

import {routes} from './router'  

const BasicRoutes = () => (
    
    <Router>
        <Switch>
            {routes.map((route, i) => ( 
                <Route key={i} exact path={route.path} render={props => <route.component {...props} /> } />
            ))}
        </Switch>
    </Router>
)

export default BasicRoutes;