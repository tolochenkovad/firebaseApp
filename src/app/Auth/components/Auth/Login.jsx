import React from "react";
import { useSelector } from "react-redux";
import { isLoaded, useFirebase, isEmpty } from "react-redux-firebase";
import { StyledFirebaseAuth } from "react-firebaseui";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import { ROUTES } from "../../../../routes/constans";
import { Redirect } from "react-router-dom";
import { toastr } from "react-redux-toastr";

const useStyles = makeStyles(theme => ({
  box: {
    paddingTop: theme.spacing(6.25),
  },
  title: {
    textAlign: "center",
    marginBottom: theme.spacing(6.25),
  },
}));

const onSucessLogin = () => {
  toastr.success("Successfully authorized");
};

const Login = () => {
  const firebase = useFirebase();
  const auth = useSelector(state => state.firebase.auth);
  const classes = useStyles();

  return (
    <div className={classes.box}>
      {!isLoaded(auth) ? (
        <span>Loading...</span>
      ) : isEmpty(auth) ? (
        <>
          <Typography variant="h5" className={classes.title}>
            You can log in using your social networks!
          </Typography>
          <StyledFirebaseAuth
            uiConfig={{
              signInFlow: "popup",
              signInSuccessUrl: "/login",
              signInOptions: [
                firebase.auth.GoogleAuthProvider.PROVIDER_ID,
                firebase.auth.FacebookAuthProvider.PROVIDER_ID,
                firebase.auth.GithubAuthProvider.PROVIDER_ID,
                firebase.auth.EmailAuthProvider.PROVIDER_ID,
              ],
              callbacks: {
                signInSuccessWithAuthResult: () => onSucessLogin(),
              },
            }}
            firebaseAuth={firebase.auth()}
          />
        </>
      ) : (
        <Redirect to={ROUTES.main} />
      )}
    </div>
  );
};

export default Login;
