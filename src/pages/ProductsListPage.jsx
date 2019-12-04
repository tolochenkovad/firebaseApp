import React, { lazy } from "react";

const ProductList = lazy(() =>
  import("../app/Products/components/ProductList/ProductList")
);

const ProductsListPage = () => <ProductList />;

export default ProductsListPage;
