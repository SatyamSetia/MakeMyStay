import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from '../components/header/header';

import { routes } from './routes-config';

const WithHeader = ({ component }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="App_content">
                {component()}
            </div>
        </React.Fragment>
    );
}

const securedRoute = (isAuthenticated, route) => {
    return (
        <Route
            key={route.path}
            path={route.path}
            render={({ location }) =>
                isAuthenticated ? (
                    <WithHeader component={route.component}/>
                ) : (
                    <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
}

const Routes = () => {
    const isAuthenticated = true;

    return (
        <Router>
            <Switch>
                {
                    routes.map(route => {
                        return route.authGuard ?
                            securedRoute(isAuthenticated, route) :
                            <Route
                                key={route.path}
                                path={route.path}
                                component={route.component}
                            />;
                    })
                }
            </Switch>
        </Router>
    );
}

export default Routes;