import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';

import { logoutUser } from '../../store/actions/auth-actions';

import './header.css';

const Header = ({_logoutUser}) => {
    const history = useHistory();

    const logout = () => {
        _logoutUser();
        history.push('/');
    }

    return (
        <div className="Header">
            <div></div>
            <span className="Header__logoutButton" onClick={logout}>Logout</span>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        _logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(null, mapDispatchToProps)(Header);