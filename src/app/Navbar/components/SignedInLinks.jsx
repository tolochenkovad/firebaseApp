import React from 'react';
import { NavLink } from 'react-router-dom';
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles(theme => ({
        box: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'uppercase'
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            marginLeft: theme.spacing(6.25)
        },
    }
));

const SignedInLinks = () => {

    const classes = useStyles();
    return (
            <NavLink className={classes.link} to='/'>Log Out</NavLink>
    )
};

export default SignedInLinks