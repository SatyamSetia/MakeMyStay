import * as actionTypes from './action-types';

export const loginUser = (user) => {
    return {
        type: actionTypes.LOGIN_USER,
        user
    }
}

export const logoutUser = () => {
    return {
        type: actionTypes.LOGOUT_USER
    }
}