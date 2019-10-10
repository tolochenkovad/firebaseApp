import React from 'react'
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {getDate, getDescription, getImg, getLocation, getPrice, getTitle} from "../redux/selectors";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
        container:{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginBottom: theme.spacing(2.5)
        },
        box: {
            padding: theme.spacing(6.25, 3.75),
            height: '100vh'
        },
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
            width: '80%',
            height: theme.spacing(31.25),
            background: '#9fabdc',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            marginBottom: theme.spacing(61.25)
        },
        date: {
        },
        priceBox:{
            height: '100%',
            display: 'flex',
            alignItems: 'flex-end',
        },
        price:{
            fontWeight: 'bold',
            fontSize: theme.spacing(3.75)
        },
        infoBox:{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        btn:{
            marginRight: theme.spacing(3.75)
        }
    }
));

const ProductList = ({img, title, description, location, date, price}) => {
    const classes = useStyles();
    return (
        <Grid className={classes.box}>
            <List className={classes.container}>
                <ListItem className={classes.boxItem}>
                    <Grid className={classes.imgBox}>
                        <img src={img} className={classes.img} alt='img-item' />
                    </Grid>

                    <Grid className={classes.descriptionBox}>
                        <Typography variant="h6" className={classes.title} >{title}</Typography>
                        <Grid className={classes.description}>{description}</Grid>
                        <Grid>{location}</Grid>

                        <Grid className={classes.infoBox}>
                            <Grid className={classes.date}>{date}</Grid>
                            <Button variant="contained" color="secondary" className={classes.btn}>More Info</Button>
                        </Grid>

                    </Grid>

                    <Grid className={classes.priceBox}>
                        <Grid className={classes.price}>{`${price} $`}</Grid>
                    </Grid>

                </ListItem>
            </List>
        </Grid>
    )
};

const mapStateToProps = state => ({
    img: getImg(state),
    title: getTitle(state),
    description: getDescription(state),
    location: getLocation(state),
    date: getDate(state),
    price: getPrice(state)
});



export default connect(mapStateToProps)(ProductList);