import React, { useReducer } from 'react';
import PostContext from './PostContext';
import PostReducer from './PostReducer';
import axios from 'axios';

import {
  ADD_POST
} from './types';

const PostState = props => {

  const initialState = {
    token: '',
    authorId: '',
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
        'Authorization': 'Bearer ' + localStorage.getItem('token')
      }
    };
    const res = await axios.post('/posts', post, config);

    dispatch({
      type: ADD_POST,
      payload: res.post
    });
  };


  return (
    <PostContext.Provider
      value={{
        token: state.token,
        authorId: state.id,
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
