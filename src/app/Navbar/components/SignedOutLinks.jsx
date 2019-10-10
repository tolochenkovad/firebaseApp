import React from 'react'
import {NavLink} from 'react-router-dom'
import {makeStyles} from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
        box: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            marginLeft: theme.spacing(6.25)
        },
    }
));

const SignedOutLinks = () => {

    const classes = useStyles();

    return (
        <Grid className={classes.box}>
            <NavLink className={classes.link} to='/login'>Login</NavLink>
        </Grid>
    )
};

export default SignedOutLinks;