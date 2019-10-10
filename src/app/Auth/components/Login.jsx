import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";
import {getAuth} from "../redux/selectors";
import {toLogin} from "../redux/actions";

const useStyles = makeStyles(theme => ({
        container: {
            background: '#9fabdc',
            padding: theme.spacing(6.25, 3.75),
            height: '100vh'
        },
        title: {
            marginBottom: theme.spacing(6.25)
        },
        form: {
            marginTop: theme.spacing(6.25),
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input: {
            marginBottom: theme.spacing(1.25),
            paddingLeft: theme.spacing(2.5),
            border: '1px solid black',
            borderRadius: theme.spacing(1.25),
            outline: 'none',
            height: theme.spacing(6.25),
            width: theme.spacing(50),
            fontSize: theme.spacing(2),
            '&:focus, &:active': {
                color: 'black',
                border: '1px solid black'
            }
        },
        btn: {
            marginTop: theme.spacing(2.5),
            width: theme.spacing(50),
            padding: theme.spacing(1.25),
            borderRadius: theme.spacing(0.625),
            fontSize: theme.spacing(2.25),
            color: 'white',
            transition: '0.2s',
            cursor: 'pointer',
        },
        error: {
            color: 'red'
        }
    }
));

const LoginForm = ({handleSubmit}) => {
    const classes = useStyles();

    return (
        <Grid className={classes.container}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Typography variant="h4" className={classes.title}>Login</Typography>
                <Field component='input'
                       className={classes.input}
                       placeholder='Email'
                       type="email"
                       name="email"
                />
                <Field component='input'
                       className={classes.input}
                       placeholder='Password'
                       type="password"
                       name="password"
                />
                <Button variant="contained"
                        color="secondary"
                        className={classes.btn}
                        type={"submit"}>SUBMIT
                </Button>

            </form>
        </Grid>
    )
};

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = ({isAuth, toLogin}) => {

    const onSubmit = (formData) => {
        const {email} = formData;
        toLogin(email);
    };

    if (isAuth) {
        return <Redirect to="/"/>
    }

    return (
        <LoginReduxForm onSubmit={onSubmit}/>
    )

};

const mapStateToProps = (state) => {
    return {
        isAuth: getAuth(state)
    }
};

export default connect(mapStateToProps, {toLogin})(Login);
