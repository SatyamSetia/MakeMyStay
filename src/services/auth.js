import { users } from "../data/users"
import fakeApi from "../utils/http-client";

export const loginService = (user) => {
    const matchUser = (userData => {
        return userData.username === user.username && userData.type === user.type;
    });

    let loggedInUser = users.find(matchUser);

    if(loggedInUser) return fakeApi(loggedInUser) 
    else return fakeApi(null);
}