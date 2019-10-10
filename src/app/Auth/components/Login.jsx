import React from 'react';
import {makeStyles} from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
        box: {
            fontSize: theme.spacing(3),
            background: '#589ac6',
            padding: theme.spacing(6.25, 3.75),
            height: '100vh'
        },
        title: {
          marginBottom: '50px'
        },
        form: {
            marginTop: '50px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
        input : {
            marginBottom: '10px',
            paddingLeft: '20px',
            border: '1px solid black',
            borderRadius: '10px',
            outline: 'none',
            height: '50px',
            width: '400px',
            fontSize: '16px',
            '&:focus, &:active': {
                color: 'black',
                border: '1px solid black'
            }
        },
        btn: {
            marginTop: '20px',
            width: '400px',
            padding: '10px',
            borderRadius: '5px',
            fontSize: '18px',
            color: 'white',
            transition: '0.2s',
            cursor: 'pointer',
        }
    }
));

const Login = () => {

    const classes = useStyles();

    const onSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <form className={classes.form} onSubmit={onSubmit}>
            <Typography variant="h4" className={classes.title} >Login</Typography>
                <input className={classes.input} placeholder='Email' type="email" id='email'/>
                <input className={classes.input} placeholder='Password' type="password" id='password'/>
                <Button variant="contained" color="secondary" className={classes.btn} type={"submit"}>SUBMIT</Button>
        </form>
    )
};

export default Login;