import { users } from "../data/users"
import fakeApi from "../utils/http-client";

const LOGGED_IN_USER_KEY = "LOGGED_IN_USER";

export const loginService = (user) => {
    const matchUser = (userData => {
        return userData.username === user.username && userData.type === user.type;
    });

    let loggedInUser = users.find(matchUser);

    if(loggedInUser) {
        setLoggedInUser(loggedInUser._userId);
        return fakeApi(loggedInUser)
    } 
    else return fakeApi(null);
}

export const logoutService = () => {
    window.localStorage.removeItem(LOGGED_IN_USER_KEY);
}

export const getLoggedInUser = () => {
    let loggedInUserId = window.localStorage.getItem(LOGGED_IN_USER_KEY);
    if(loggedInUserId) {
        let user = users.find(userData => userData._userId === loggedInUserId);
        return user;
    } else return null;
}

export const setLoggedInUser = (_userId) => {
    return window.localStorage.setItem(LOGGED_IN_USER_KEY, _userId);
}