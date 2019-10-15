import {LOGIN, LOGOUT, USER_LOGGED_IN, USER_LOGGED_OUT} from "./types";

export const toLogin = (email) => ({
    type: LOGIN,
    payload: email

});

export const toLogout = () => ({
    type: LOGOUT
});

export const userLoggedIn = (user) => ({
    type: USER_LOGGED_IN,
    payload: user,
});

export const userLoggedOut = () => ({
    type: USER_LOGGED_OUT,
});

