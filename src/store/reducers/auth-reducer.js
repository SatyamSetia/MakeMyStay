import * as actionTypes from "../actions/action-types";

const initialState = {
    user: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOGIN_USER: return {
            ...state,
            user: action.user
        }
        case actionTypes.LOGOUT_USER: return initialState
        default: return state
    }
}

export default authReducer;