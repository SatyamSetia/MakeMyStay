import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router';
import { USERTYPES } from '../../../config';

import { loginService } from '../../../services/auth';
import { loginUser } from '../../../store/actions/auth-actions';
import Loader from '../../utilities/loader/loader';

import './login-form.css';

const LoginForm = ({_loginUser}) => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUserGuest, setIsUserGuest] = useState(true);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const onLogin = () => {
        setIsLoading(true);
        if(username.length && password.length) {
            loginService({
                username,
                password,
                type: isUserGuest ? 'guest' : 'host'
            }).then((data) => {
                console.log(data);
                if(!data) throw new Error("Invalid credentials!!");

                _loginUser({
                    ...data,
                    type: USERTYPES.GUEST === data.type ? USERTYPES.GUEST : USERTYPES.HOST
                });
                history.push('/properties');
            }).catch((err) => {
                console.log(err);
                setUsername("");
                setPassword("");
                setIsLoading(false);
            });
        }
    }

    return (
        <div className="LoginForm">
            <div className="LoginForm__userTypeToggle">
                <div 
                    className={isUserGuest ? "LoginForm__activeToggle" : "LoginForm__inActiveToggle"}
                    onClick={() => setIsUserGuest(true)}
                >
                    Guest
                </div>
                <div 
                    className={!isUserGuest ? "LoginForm__activeToggle" : "LoginForm__inActiveToggle"}
                    onClick={() => setIsUserGuest(false)}
                >
                    Host
                </div>
            </div>
            <div className="LoginForm__inputGroup">
                {
                    username.length > 0 ?
                    <label className="LoginForm__inputLabel">Username</label> : null
                }
                <input 
                    id="username" 
                    placeholder="Username" 
                    type="text" 
                    className="LoginForm__inputControl" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                
                {
                    password.length > 0 ?
                    <label className="LoginForm__inputLabel">Password</label> : null
                }
                <input 
                    placeholder="Password" 
                    type="password" 
                    className="LoginForm__inputControl" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            {
                isLoading ? 
                <div className="LoginForm__loader">
                    <Loader/>
                </div> :
                <button className="LoginForm__loginButton" onClick={onLogin}>Login as {isUserGuest? 'Guest' : 'Host'}</button>
            }
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        _loginUser: (user) => dispatch(loginUser(user))
    }
}

export default connect(null, mapDispatchToProps)(LoginForm);