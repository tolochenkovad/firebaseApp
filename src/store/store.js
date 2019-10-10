import { createStore, combineReducers, applyMiddleware} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
// import rootSaga from '../sagas/sagas';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'
import productListReducer from "../app/ProductList/redux/reducer";
import { reducer as formReducer } from 'redux-form';
import userReducer from "../app/Auth/redux/reducer";

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['form', 'products']
};

const reducers = combineReducers({
   products: productListReducer,
   user: userReducer,
   form: formReducer
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore( persistedReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)) );

export let persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

export default store;