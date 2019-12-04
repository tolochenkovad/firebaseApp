import React from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import { ROUTES } from "../../routes/constans";
import { useFirebase } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";

const useStyles = makeStyles(theme => ({
  box: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "uppercase",
  },
  link: {
    textDecoration: "none",
    color: "black",
    marginLeft: theme.spacing(6.25),
  },
}));

const SignedInLinks = () => {
  const firebase = useFirebase();

  const logout = async () => {
    await firebase.auth().signOut();
    toastr.success("You are log out!");
  };

  const classes = useStyles();
  return (
    <NavLink className={classes.link} onClick={logout} to={ROUTES.main}>
      Log Out
    </NavLink>
  );
};

export default SignedInLinks;
