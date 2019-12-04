import React, { lazy } from "react";

const Login = lazy(() => import("../app/Auth/components/Auth/Login"));

const LoginPage = () => <Login />;

export default LoginPage;
