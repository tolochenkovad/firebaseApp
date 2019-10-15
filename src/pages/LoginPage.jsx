import React, { lazy } from 'react';

const Login = lazy(() => import('../components/Auth/Login'));

const LoginPage = () => <Login />;

export default LoginPage;