import { api } from '../apiProject'

const FIREBASE_EMAIL = 'emailForSignIn';

export const setToken = (token) => {
    api.defaults.headers.common.Authorization = token;
};

export const saveEmail = (email) => localStorage.setItem(FIREBASE_EMAIL, email);

export const getEmail = () => localStorage.getItem(FIREBASE_EMAIL);

export const removeEmail = () => localStorage.removeItem(FIREBASE_EMAIL);
