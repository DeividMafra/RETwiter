import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import AuthContext from '../context/AuthContext';

import AddPostBtn from '../layout/AddPostBtn';

const PostItem = ({ post: { title, authorId, date, content, tags } }) => {

  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return (
    <Fragment>
      {isAuthenticated && <AddPostBtn />}
      <div className="collection-item">
        <i className="material-icons circle green">account_circle</i>
        <span className="truncate">AUTHOR: {authorId}</span><br /><br />
        <span style={{ textTransform: 'uppercase' }} className="card-title blue-grey-text">{title}</span>

        <span className="grey-text"> - <Moment format='MMMM Do YYYY, h:mm a'>{date}</Moment>
          <span className="black-text"></span>
        </span>
        <p>{content}</p>
        <br />
        {tags && <span className="badge blue white-text">#{tags[2]}</span>}
        {tags && <span className="badge purple white-text">#{tags[1]}</span>}
        {tags && <span className="badge black white-text">#{tags[0]}</span>}
        <br />

        {/* {tags && (tags.map((tag, j) => <span key={j}>{tag} </span>))} */}
      </div>
    </Fragment>
  )
}

PostItem.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostItem
