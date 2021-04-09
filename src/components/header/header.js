import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { USERTYPES } from '../../config';
import { logoutService } from '../../services/auth';

import { logoutUser } from '../../store/actions/auth-actions';

import './header.css';

const Header = ({_logoutUser, user}) => {
    const history = useHistory();

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
            <div></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Header);