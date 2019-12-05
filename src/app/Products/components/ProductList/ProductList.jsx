import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import { connect } from "react-redux";
import ProductItem from "./ProductItem";
import Typography from "@material-ui/core/Typography";
import {
  getLoadingProducts,
  getProductsFirestore,
} from "../../redux/selectors";
import AddProduct from "../AddProduct/AddProduct";
import Loading from "../../../../common/loading/Loading";
import { deleteProductAction, setProductsAction } from "../../redux/actions";

const useStyles = makeStyles(theme => ({
  containerList: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 0,
  },
  box: {
    padding: theme.spacing(6.25, 3.75),
    background: "#9fabdc",
  },
  formBox: {
    marginTop: theme.spacing(3.75),
    border: "1px solid black",
    padding: theme.spacing(3.75),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  btn: {
    marginTop: theme.spacing(2.5),
  },
}));

const ProductList = ({
  setProductsAction,
  loadingProducts,
  productFirestore,
  deleteProductAction,
}) => {
  useEffect(() => {
    setProductsAction();
  }, []);

  const classes = useStyles();

  const deleteProducts = productId => {
    deleteProductAction(productId);
  };

  return (
    <Grid className={classes.box}>
      <List className={classes.containerList}>
        {!loadingProducts ? (
          productFirestore.map(product => (
            <ProductItem
              product={product}
              deleteProducts={deleteProducts}
              key={product.id}
            />
          ))
        ) : (
          <Loading />
        )}

        <Typography variant="h4">Add Product</Typography>
        <AddProduct classes={classes} />
      </List>
    </Grid>
  );
};

const mapStateToProps = state => ({
  productFirestore: getProductsFirestore(state),
  loadingProducts: getLoadingProducts(state),
});

export default connect(mapStateToProps, {
  setProductsAction,
  deleteProductAction,
})(ProductList);
