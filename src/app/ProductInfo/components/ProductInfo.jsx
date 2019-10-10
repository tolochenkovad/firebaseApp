import React from 'react'
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import {Typography} from "@material-ui/core";


const useStyles = makeStyles(theme => ({
        container: {
            background: '#9fabdc',
            height: '100vh',
            padding: theme.spacing(6.25, 0)
        },
        containerInfo: {
            padding: theme.spacing(2.5),
            margin: '0 auto',
            width: '60%',
            background: '#929aca',
        },
        wrap: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        contentWrap: {
            width: '50%',
        },

        info: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            marginBottom: theme.spacing(12.5)
        },
        img: {
            display: 'inline-block',
            width: theme.spacing(22.75),
            height: theme.spacing(22.75),
            marginTop: theme.spacing(12.5)
        },
        priceBox: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-end',
            marginLeft: theme.spacing(1.25)
        },
        description: {
            textAlign: 'unset',
            width: '70%',
            margin: theme.spacing(0, 2.25)
        },
        price: {
            fontWeight: 'bold',
            fontSize: theme.spacing(3.75),
            minWidth: theme.spacing(12.5),
            marginTop: theme.spacing(25)
        },
        content: {
            display: 'flex',
            alignItems: 'center'
        },
        location: {
            marginTop: theme.spacing(5)
        },
        author: {
            marginRight: theme.spacing(2.5)
        }
    }
));

const ProductInfo = ({product}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.container}>
            <Grid className={classes.containerInfo}>
                <Grid className={classes.wrap}>
                    <Grid className={classes.info}>
                        <Typography variant="h3" className={classes.title}>{product.title}</Typography>
                        <Grid className={classes.content}>
                            <img className={classes.img} src={product.img} alt="imgItem"/>
                            <Grid className={classes.description}>{product.description}</Grid>
                        </Grid>
                    </Grid>
                    <Grid className={classes.priceBox}>
                        <Grid>{product.date}</Grid>
                        <Grid className={classes.location}>{product.location}</Grid>
                        <Grid className={classes.price}>{`${product.price} $`}</Grid>
                    </Grid>
                </Grid>
                <Grid>
                    <Grid className={classes.author}>{product.author}</Grid>
                    <Grid>{product.contact}</Grid>
                </Grid>
            </Grid>
        </Grid>
    )
};

export default ProductInfo;