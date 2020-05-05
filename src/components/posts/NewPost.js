import React, { useState, useContext, Fragment, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
import PostContext from '../context/PostContext';

const NewPost = props => {

  const postContext = useContext(PostContext);
  const { addPost } = postContext;

  const [tagList, setTagList] = useState([]);
  const [newTag, setNewTag] = useState("");

  const onAddTagClick = e => {
    e.preventDefault();
    return setTagList(tagList => [...tagList, newTag])
  };

  const addToTagList = ({ target }) => {
    setNewTag(target.value);
  };

  useEffect(() => {
  });

  const [post, setPost] = useState({
    token: localStorage.getItem('token'),
    title: '',
    content: '',
    authorId: localStorage.getItem('id'),
    date: new Date().toISOString(),
    tags: tagList
  });

  const onChange = e =>
    setPost({ ...post, [e.target.name]: e.target.value });

  // const onChange = e =>
  //   setPost({
  //     ...post,
  //     title: e.target.value.title,
  //     content: e.target.value.content,
  //     tags: tagList
  //   });

  // const { title, content } = post;
  const { title, content, tags } = post;

  const onSubmit = e => {
    e.preventDefault();
    if (title === '' || content === '') {
      M.toast({ html: "Please enter a title and your message!" })
    } else {
      addPost(post)
      console.log('post', post)
      M.toast({ html: "Added new post!" });
      props.history.push('/posts');
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
        {/* <div className="input-field">
          <input
            // type="hidden"
            type="text"
            name="tags"
            value={tags}
            onChange={onChange}
          />
          <label htmlFor="tags" className="active">Tag List</label>
        </div> */}
        <Fragment>
          {/* <label htmlFor="tags" className="active badge">{tagList}</label> */}
          {/* <span></span> */}

          <div className="input-field col s6">
            <label htmlFor="tags" onChange={onChange} value={tags} className="">Tags: {tagList + " "}</label>
            <input
              type="text"
              // name="newTag"
              name="tags"
              onChange={addToTagList}
            />
            {/* <label htmlFor="tags" className="active">Add New Tag</label> */}
          </div>
          <div className="col s6">
            <button onClick={onAddTagClick} className="waves-effect waves-light blue btn">Add tag </button>
          </div>
        </Fragment>

      </div>
      <div>
        <input type="submit" value="Post" className="waves-effect waves-light btn" />
      </div>
    </form>

  )
}

export default NewPost
