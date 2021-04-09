import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from '../components/header/header';
//import { getLoggedInUser } from '../services/auth';

import { routes } from './routes-config';

const WithHeader = ({ component, ...props }) => {
    return (
        <React.Fragment>
            <Header />
            <div className="App_content">
                {component(props)}
            </div>
        </React.Fragment>
    );
}

const securedRoute = (isAllowed, route) => {
    console.log(isAllowed)
    return (
        <Route
            key={route.path}
            path={route.path}
            render={({ location }) =>
                isAllowed ? (
                    <WithHeader component={route.component} />
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

const Routes = ({user}) => {
    const isAuthenticated = user !== null;
    console.log('is authenticated', isAuthenticated);
    return (
        <Router>
            <Switch>
                {
                    routes.map(route => {
                        console.log(user);
                        const isAuthorized = user ? route.canAccess.includes(user.type) : false;
                        console.log('is authrized', isAuthorized);
                        return route.authGuard ?
                            securedRoute(isAuthenticated && isAuthorized, route) :
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

const mapStateToProps = ({ auth }) => {
    return {
        user: auth.user
    }
}

export default connect(mapStateToProps)(Routes);