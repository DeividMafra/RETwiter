import React, { useState, useContext } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PostContext from '../context/PostContext';

const NewPost = () => {

  const postContext = useContext(PostContext);
  const { addPost } = postContext;

  const [post, setPost] = useState({
    token: localStorage.getItem('token'),
    username: localStorage.getItem('username'),
    title: '',
    content: '',
    authorId: '',
    date: new Date().toISOString(),
    tags: [],
  });

  const { title, content, tags } = post;

  const onChange = e =>
    setPost({ ...post, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || content === '') {
      M.toast({ html: "Please enter a title and your message!" })
    } else {
      addPost(post)
      // console.log('title', title)
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <h4>New Post</h4>
      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="title"
            value={title}
            onChange={onChange}
          />
          <label htmlFor="title" className="active">Title</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="content"
            value={content}
            onChange={onChange}
          />
          <label htmlFor="content" className="active">Message</label>
        </div>
      </div>

      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="tags"
            value={tags}
            onChange={onChange}
          />
          <label htmlFor="tags" className="active">Tags</label>
        </div>
      </div>

      <div>
        <a className="waves-effect waves-light btn">Post</a>
        {/* <a onClick={onSubmit} className="waves-effect waves-light btn">Post</a> */}
      </div>

    </form>
  )
}

export default NewPost
