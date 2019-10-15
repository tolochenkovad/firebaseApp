import { all, spawn } from 'redux-saga/effects';
import authSaga from "../components/Auth/redux/saga";

function* rootSaga() {
    yield all([
        spawn(authSaga),
    ]);
}

export default rootSaga;