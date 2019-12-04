import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/styles";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { useSelector } from "react-redux";
import { ROUTES } from "../../routes/constans";
import { isEmpty } from "react-redux-firebase";

const useStyles = makeStyles(theme => ({
  box: {
    fontSize: theme.spacing(2),
    background: "#1976d2",
    padding: theme.spacing(2.5, 3.75),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "uppercase",
  },
  link: {
    textDecoration: "none",
    color: "black",
    textTransform: "uppercase",
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const auth = useSelector(state => state.firebase.auth);

  return (
    <Grid className={classes.box}>
      <Link className={classes.link} to={ROUTES.main}>
        To the list
      </Link>
      <Grid>{!isEmpty(auth) ? <SignedInLinks /> : <SignedOutLinks />}</Grid>
    </Grid>
  );
};

export default Navbar;
