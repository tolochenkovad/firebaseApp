import { call, put, all, takeLatest, take } from 'redux-saga/effects';
import {
    SAVE_TOKEN_FAILED,
    SAVE_TOKEN_SUCCESS,
    SAVE_USER_FAILED,
    SAVE_USER_REQUEST,
    SAVE_USER_SUCCESS,
    USER_LOGGED_IN
} from "./types";
import {getDoc, setDoc, updateDoc} from "../../../utils/firebase";
import {COLLECTIONS} from "../../../constans/constans";
import {firebaseUserToTripPlanUser} from "../../../utils/users";
import {setToken} from "../../../api/storage";


function* handleToken(action) {
    try {
        const user = action.payload;
        const token = yield user.getIdToken(true);
        yield setToken(token);
        yield put({
            type: SAVE_TOKEN_SUCCESS,
        });
    } catch (error) {
        yield put ({
            type: SAVE_TOKEN_FAILED,
            payload: error,
        });
    }
}

function* saveUser(action) {
    try {
        yield put ({
            type: SAVE_USER_REQUEST,
        });
        const { uid } = action.payload;
        const response = yield call(getDoc, COLLECTIONS.users, uid);
        let user = response.data();
        if (user) {
            yield call(updateDoc, COLLECTIONS.users, uid, {...user, lastLogin: new Date().toISOString()});
        } else {
            user = firebaseUserToTripPlanUser(action.payload);
            yield call(setDoc, COLLECTIONS.users, uid, user);
        }
        yield put({
            type: SAVE_USER_SUCCESS,
            payload: user,
        });

    } catch (error) {
        yield put({
            type: SAVE_USER_FAILED,
            payload: error,
        });
    }
}


function* authSaga() {
    yield all([
        yield takeLatest(USER_LOGGED_IN, handleToken),
        yield takeLatest(USER_LOGGED_IN, saveUser),
    ]);
}

export default authSaga;