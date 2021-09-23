import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_FAILURE,
  AUTH_LOGOUT
} from "./authType";

export const auth_login_request = () => {
  return {
    type: AUTH_LOGIN_REQUEST,
  };
};

export const auth_login_success = (user) => {
  return {
    type: AUTH_LOGIN_SUCCESS,
    payload: user,
  };
};

export const auth_failure = (error) => {
  return {
    type: AUTH_FAILURE,
    payload: error,
  };
};

export const auth_logout = () => {
  return {
    type: AUTH_LOGOUT,
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch(auth_login_request())
    fetch("https://jsonplaceholder.typicode.com/users/1").then(response => response.json())
    .then(json =>{ console.log(json)
      dispatch(auth_login_success(json))
    }).catch((err)=>{
      console.log(err)
      dispatch(auth_failure(err))
    })
  }
}
