import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/styles';
import {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";

const useStyles = makeStyles(theme => ({
        box: {
            fontSize: theme.spacing(3),
            background: '#898997',
            padding: theme.spacing(6.25, 3.75),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            textTransform: 'uppercase'
        },
        link: {
            textDecoration: 'none',
            color: 'black',
            textTransform: 'uppercase'
        }
    }
));

const Navbar = () => {

    const login = true;

    const classes = useStyles();

    return (
        <Grid className={classes.box}>
            <Link className={classes.link} to='/'>To the list</Link>
            <Grid className={classes.linkBox}>
                {
                    login
                        ? <SignedOutLinks/>
                        : <SignedInLinks/>
                }
            </Grid>
        </Grid>
    )
};

export default Navbar;