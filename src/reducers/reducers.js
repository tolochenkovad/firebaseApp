import {combineReducers} from "redux";
import productListReducer from "../components/ProductList/redux/reducer";
import userReducer from "../components/Auth/redux/reducer";
import { reducer as formReducer } from 'redux-form';

const reducers = combineReducers({
    products: productListReducer,
    user: userReducer,
    form: formReducer
});

export default reducers;