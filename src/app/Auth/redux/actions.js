import {LOGIN, LOGOUT} from "./constans";

export const toLogin = (email) => ({
    type: LOGIN,
    payload: email

});

export const toLogout = () => ({
    type: LOGOUT
});
