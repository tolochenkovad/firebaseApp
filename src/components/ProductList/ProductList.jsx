import React from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import List from "@material-ui/core/List";
import {getProducs} from "./redux/selectors";
import {connect} from "react-redux";
import ProductItem from "./ProductItem";

const useStyles = makeStyles(theme => ({
        containerList: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0
        },
        box: {
            padding: theme.spacing(6.25, 3.75),
            background: '#9fabdc',
        },
    }
));

const ProductList = ({products}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.box}>
            <List className={classes.containerList}>
                {
                    products.map(product =>
                        <ProductItem product={product} key={product.id}/>
                    )
                }
            </List>
        </Grid>
    )
};

const mapStateToProps = state => ({
    products: getProducs(state),
});


export default connect(mapStateToProps)(ProductList);