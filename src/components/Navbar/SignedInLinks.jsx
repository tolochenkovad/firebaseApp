import React from 'react';
import { NavLink } from 'react-router-dom';
import {makeStyles} from "@material-ui/styles";
import {connect} from "react-redux";
import {toLogout} from "../Auth/redux/actions";

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

const SignedInLinks = ({toLogout}) => {

    const classes = useStyles();
    return (
            <NavLink className={classes.link} onClick={toLogout} to='/'>Log Out</NavLink>
    )
};

export default connect(null, {toLogout})(SignedInLinks);
