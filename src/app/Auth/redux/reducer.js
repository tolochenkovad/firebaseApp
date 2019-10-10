import {LOGIN, LOGOUT} from "./constans";

let initialState = {
    id: null,
    email: null,
    isAuth: false
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
        default:
            return state;
    }
};

export default userReducer;