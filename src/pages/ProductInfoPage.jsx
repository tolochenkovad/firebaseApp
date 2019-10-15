import React, { lazy } from 'react';
import {getProducs} from "../components/ProductList/redux/selectors";
import { useSelector } from "react-redux";

const ProductInfo = lazy(() => import('../components/ProductInfo/ProductInfo'));

const ProductsInfoPage = ({match}) => {

    const products = useSelector(state => getProducs(state));

    const numberPage = +match.params.id;
    const product = products.filter(p => numberPage === p.id)[0];

    return(
       <ProductInfo product={product}/>
    )

};

export default ProductsInfoPage;