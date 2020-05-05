import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ADD_POST,
} from './types';

export default (state, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS:
    case LOGIN_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('username', action.payload.user);
      localStorage.setItem('id', action.payload.id);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
      };

    case REGISTER_FAIL:
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT:
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('id');
      return {
        ...state,
        token: null,
        username: null,
        isAuthenticated: false,
        error: action.payload
      };
    case ADD_POST:
      return {
        ...state,
        posts: [action.payload, ...state.posts],
        loading: false
      };
    default:
      return state;
  }
};
