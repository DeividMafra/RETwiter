import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import axios from 'axios';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from './types';

const AuthState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null,
    error: null
  };

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  //Load User

  //Register USer
  const register = async FormData => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    try {
      const res = await axios.get.post('/auth/register', FormData, config);
      console.log("res.data", res.data)
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
      })
    } catch (error) {
      console.log("error", error)
      dispatch({
        type: REGISTER_FAIL,
        payload: error.errors
      });

    }
  }

  //Login User

  //Logout

  //Clear Errors




  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        user: state.user,
        error: state.error,
        register
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState
