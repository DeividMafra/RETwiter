import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from './types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    username: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Register User
  const register = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log('FormData', FormData)
    await axios.post('/auth/register', FormData, config).
      then(res =>
        dispatch({
          type: REGISTER_SUCCESS,
          payload: res.data.user,
        })
      )
      .catch(error => {
        if (error.response.data.errors.username === 'taken') {
          M.toast({ html: "User already exist!" })
        }
        dispatch({
          type: REGISTER_FAIL,
          payload: error.response.data.errors.username
        })

        // console.log("error", error.response.data.errors.username)
      })


  }

  //Login User
  const logIn = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    console.log('FormData', FormData)
    await axios.post('/auth/login', FormData, config).
      then(res =>
        dispatch({
          type: LOGIN_SUCCESS,
          payload: res.data.user,
        })
      )
      .catch(error => {
        if (error.response.data.errors["username or password"] === 'is invalid') {
          M.toast({ html: "Username and/or password invalid!" })
        }
        dispatch({
          type: LOGIN_FAIL,
          payload: error.response.data.errors["username or password"]
        })

        // console.log("error", error.response.data.errors.username)
      })
  };

  //Logout
  const logOut = () => {
    dispatch({
      type: LOGOUT
    })
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        username: state.user,
        error: state.error,
        register,
        logOut,
        logIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState
