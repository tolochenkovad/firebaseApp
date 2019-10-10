import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./lib/material-ui/theme";
import Main from "./app/container/Main";
import {Provider} from "react-redux";
import store from "./store/store";

const App = () => (
    <>
        <CssBaseline/>
        <Main/>
    </>
);


const MyApp = () => (
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </Provider>
);

export default MyApp;




