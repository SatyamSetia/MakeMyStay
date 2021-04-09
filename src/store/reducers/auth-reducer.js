import { getLoggedInUser } from "../../services/auth";
import * as actionTypes from "../actions/action-types";

export const initialState = {
    user: getLoggedInUser()
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