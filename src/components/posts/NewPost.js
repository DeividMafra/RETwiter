import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const NewPost = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorId, setAuthorId] = useState('');
  const [date, setDate] = useState(new Date().toISOString());
  const [tags, setTags] = useState([]);

  const onSubmit = () => {
    if (title === '' || content === '') {
      M.toast({ html: "Please enter a title and your message!" })
    } else {
      console.log('title', title)
    }
  }

  return (
    <div>
      <h4>New Post</h4>
      <div className="row">
        <div className="input-field">
          <input
            type="text"
            name="title"
            value={title}
            onChange={e => setTitle(e.target.value)}
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
            onChange={e => setContent(e.target.value)}
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
            onChange={e => setTags(e.target.value)}
          />
          <label htmlFor="tags" className="active">Tags</label>
        </div>
      </div>

      <div>
        <a onClick={onSubmit} className="waves-effect waves-light btn">Post</a>
      </div>

    </div>
  )
}

export default NewPost
