import React, { lazy } from 'react';

const ProductList = lazy(() => import('../components/ProductList/ProductList'));

const ProductsListPage = () => <ProductList />;

export default ProductsListPage;