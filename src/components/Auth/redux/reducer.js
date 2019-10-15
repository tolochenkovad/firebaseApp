import {LOGIN, LOGOUT, SAVE_USER_FAILED, SAVE_USER_REQUEST, SAVE_USER_SUCCESS} from "./types";

let initialState = {
    id: null,
    email: null,
    isAuth: false,
    userLoading: false,
    profile: null
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                email: action.payload,
                id: Date.now(),
                isAuth: true
            };
        case LOGOUT:
            return {
                ...state,
                email: null,
                id: null,
                isAuth: false
            };

        case SAVE_USER_REQUEST:
            return {
                ...state,
                userLoading: true,
            };
        case SAVE_USER_SUCCESS:
            return {
                ...state,
                profile: action.payload,
                userLoading: false,
            };
        case SAVE_USER_FAILED:
            return {
                ...state,
                profile: null,
                userLoading: false,
            };
        default:
            return state;
    }
};

export default userReducer;