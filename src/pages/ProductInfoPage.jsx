import React, { lazy } from "react";
import { connect } from "react-redux";
import { ROUTES } from "../routes/constans";
import { Redirect } from "react-router-dom";
import { getProductsFirestore } from "../app/Products/redux/selectors";

const ProductInfo = lazy(() =>
  import("../app/Products/components/ProductInfo/ProductInfo")
);

const ProductsInfoPage = ({ match, productFirestore }) => {
  const numberPage = match.params.id;
  const product =
    productFirestore && productFirestore.find(p => numberPage === p.id);

  return (
    <>
      {product ? (
        <ProductInfo product={product} />
      ) : (
        <Redirect to={ROUTES.main} />
      )}
    </>
  );
};

const mapStateToProps = state => ({
  productFirestore: getProductsFirestore(state),
});

export default connect(mapStateToProps, {})(ProductsInfoPage);
