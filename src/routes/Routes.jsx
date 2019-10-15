import React, {Suspense} from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ErrorBoundary from "../common/errors/ErrorBoundary";
import Loading from "../common/loading/Loading";
import {ROUTES} from "./constans";
import ProductsListPage from "../pages/ProductsListPage";
import LoginPage from "../pages/LoginPage";
import ProductsInfoPage from "../pages/ProductInfoPage";


const Routes = () => {
    return (
        <BrowserRouter>
            <Navbar/>
            <ErrorBoundary>
                <Suspense fallback={<Loading/>}>
                    <Switch>
                        <Route exact path='/' component={ProductsListPage}/>
                        <Route path={ROUTES.login} component={LoginPage}/>
                        <Route path={ROUTES.dynamic.product()} component={ProductsInfoPage}/>
                    </Switch>
                </Suspense>
            </ErrorBoundary>
        </BrowserRouter>
    )
};

export default Routes;
