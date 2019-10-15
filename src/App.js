import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {ThemeProvider} from "@material-ui/styles";
import theme from "./lib/material-ui/theme";
import Routes from "./routes/Routes";
import {Provider} from "react-redux";
import store from "./store/store";


const App = () => (
    <Provider store={store}>
        <CssBaseline>
            <ThemeProvider theme={theme}>
                <Routes/>
            </ThemeProvider>
        </CssBaseline>

    </Provider>
);

export default App;




