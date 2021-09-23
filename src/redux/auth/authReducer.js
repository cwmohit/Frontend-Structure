import {
    AUTH_LOGIN_REQUEST,
    AUTH_LOGIN_SUCCESS,
    AUTH_FAILURE,
    AUTH_LOGOUT
} from "./authType";

const initialState = {
   isLogin: false,
   loading: false,
   user: {},
   error: ""
}

export const authReducer = (state=initialState,action) => {
    switch (action.type) {
        case AUTH_LOGIN_REQUEST:
            return {...state, loading: true}
        case AUTH_LOGIN_SUCCESS: 
            return {...state, loading: false, user: action.payload, isLogin: true}
        case AUTH_FAILURE: 
            return {loading: false, user: {}, error: action.payload, isLogin: false}
        case AUTH_LOGOUT:
            return initialState;    
        default:
            return state;
    }
}