import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router';

import { USERTYPES } from '../../config';
import { getViewTitle } from '../../routes/routes-config';
import { logoutService } from '../../services/auth';
import { logoutUser } from '../../store/actions/auth-actions';
import './header.css';

const Header = ({_logoutUser, user, location}) => {
    const history = useHistory();
    const [title, setTitle] = useState('');

    
    useEffect(() => {
        setTitle(getViewTitle(location.pathname));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    if(!user) return null;

    const logout = () => {
        logoutService();
        _logoutUser();
        history.replace('/');
    }

    const viewBookingRequests = () => {
        history.push('/bookings');
    }


    return (
        <div className="Header">
            <div>
                <span className="Header__back" onClick={() => history.goBack()}>back</span>
                <span className="Header__title">{title}</span>
            </div>
            <div>
                {
                    user.type === USERTYPES.HOST ? 
                    <span className="Header__actionButton" onClick={viewBookingRequests}>Requests</span> : 
                    null
                }
                <span className="Header__actionButton" onClick={logout}>Logout</span>
            </div>
        </div>
    );
}

const mapStateToProps = ({auth}) => {
    return {
        user: auth.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        _logoutUser: () => dispatch(logoutUser())
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Header));