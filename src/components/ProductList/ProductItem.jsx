import React from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyles = makeStyles(theme => ({
        title: {
            textAlign: 'center',
            marginBottom: theme.spacing(3.75)
        },
        descriptionBox:{
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        description:{
            textAlign: 'unset'
        },
        imgBox:{
            height: '100%',
            display: 'flex',
            alignItems: 'center'
        },
        img: {
            display: 'inline-block',
            width: theme.spacing(18.75),
            height: theme.spacing(18.75),
            marginRight: theme.spacing(3.75)
        },
        boxItem: {
            padding: theme.spacing(2.5),
            width: '50%',
            height: theme.spacing(31.25),
            background: '#929aca',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(10)
        },
        priceBox:{
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
        },
        price:{
            fontWeight: 'bold',
            fontSize: theme.spacing(3.25),
            minWidth: theme.spacing(10.625)
        },
        infoBox:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        btn:{
            marginRight: theme.spacing(3.75),
            minWidth: theme.spacing(6.5),
            textAlign: 'center',
            textDecoration: 'none',
            padding: theme.spacing(1.25),
            borderRadius: theme.spacing(0.625),
            color: 'white',
            transition: '0.2s',
            cursor: 'pointer',
            background: 'red',
            '&:hover':{
                background: '#991111'
            }
        }
    }
));

const ProductItem = ({product}) => {
    const classes = useStyles();

    return (
        <ListItem className={classes.boxItem}>
            <Grid className={classes.imgBox}>
                <img src={product.img} className={classes.img} alt='img-item' />
            </Grid>

            <Grid className={classes.descriptionBox}>
                <Typography variant="h6" className={classes.title} >{product.title}</Typography>
                <Grid className={classes.description}>{product.description}</Grid>
                <Grid>{product.location}</Grid>

                <Grid className={classes.infoBox}>
                    <Grid className={classes.date}>{product.date}</Grid>
                    <NavLink className={classes.btn} to={`/product/${product.id}`}>More Info</NavLink>
                </Grid>

            </Grid>

            <Grid className={classes.priceBox}>
                <Grid className={classes.price}>{`${product.price} $`}</Grid>
            </Grid>

        </ListItem>
    )
};

export default ProductItem;