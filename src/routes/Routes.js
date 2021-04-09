import React from 'react';
import { connect } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Header from '../components/header/header';
import { getLoggedInUser } from '../services/auth';

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

const Routes = (_userId) => {
    const isAuthenticated =  getLoggedInUser() !== null || _userId !== null;

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

const mapStateToProps = ({auth}) => {
    return {
        _userId: auth.user ? auth.user._userId : null 
    }
}

export default connect(mapStateToProps)(Routes);