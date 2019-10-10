import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "../Navbar/components/Navbar";
import ProductList from "../ProductList/components/ProductList";
import Login from "../Auth/components/Login";
import SignUp from "../Auth/components/SignUp";

const Main = () => {
    return (
        <BrowserRouter>
            <>
                <Navbar/>
                <Switch>
                    <Route exact path='/' component={ProductList}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/signup' component={SignUp}/>
                </Switch>
            </>
        </BrowserRouter>
    )
};

export default Main;
