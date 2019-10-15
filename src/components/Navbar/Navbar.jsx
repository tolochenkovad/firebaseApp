import React from 'react';
import Grid from "@material-ui/core/Grid";
import {makeStyles} from '@material-ui/styles';
import {Link} from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import {getAuth} from "../Auth/redux/selectors";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({
        box: {
            fontSize: theme.spacing(2),
            background: '#1976d2',
            padding: theme.spacing(2.5, 3.75),
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

const Navbar = ({isAuth}) => {

    const classes = useStyles();

    return (
        <Grid className={classes.box}>
            <Link className={classes.link} to='/'>To the list</Link>
            <Grid>
                {
                    isAuth
                        ? <SignedInLinks/>
                        : <SignedOutLinks/>

                }
            </Grid>
        </Grid>
    )
};

const mapStateToProps = (state) => {
    return {
        isAuth: getAuth(state)
    }
};

export default connect(mapStateToProps)(Navbar);
