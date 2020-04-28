import React, { useReducer } from 'react';
import PostContext from './PostContext';
import PostReducer from './PostReducer';
import axios from 'axios';
import M from 'materialize-css/dist/js/materialize.min.js';

import {
  ADD_POST
} from './types';

const PostState = props => {
  const initialState = {
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    authorId: null,
    date: new Date().toISOString(),
    tags: [],
    title: null,
    content: null
  };

  const [state, dispatch] = useReducer(PostReducer, initialState);

  // Add Post
  const addPost = async post => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('token')).token
      }
    };
    // try{
    const res = await axios.post('/posts', post, config);

    dispatch({
      type: ADD_POST,
      payload: res.data
    });
    // } catch (err) {
    // dispatch({
    //   type: ADD_ERROR,
    //   payload: err.response.msg
    // });
  };
  // };


  return (
    <PostContext.Provider
      value={{
        token: state.token,
        username: state.username,
        authorId: state.authorId,
        date: state.date,
        tags: state.tags,
        title: state.title,
        content: state.content,
        addPost
      }}
    >
      {props.children}
    </PostContext.Provider>
  );
};

export default PostState
