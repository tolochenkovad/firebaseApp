import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Navbar from "../Navbar/components/Navbar";
import ProductList from "../ProductList/components/ProductList";
import Login from "../Auth/components/Login";
import ProductInfo from "../ProductInfo/components/ProductInfo";
import {getProducs} from "../ProductList/redux/selectors";
import {connect} from "react-redux";

const Main = ({products}) => {
    return (
        <BrowserRouter>
            <>
                <Navbar/>
                <Switch>
                    <Route exact path='/' render={() => <ProductList/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    {
                        products.map(p =>
                            <Route key={p.id} path={`/product/${p.id}`}
                                   render={() => <ProductInfo product={p}/>}/>
                        )
                    }
                </Switch>
            </>
        </BrowserRouter>
    )
};

const mapStateToProps = state => ({
    products: getProducs(state)
});

export default connect(mapStateToProps)(Main);
