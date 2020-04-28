import React from 'react';
import { Link } from 'react-router-dom';

const AddPostBtn = () => {
  return (
    <div className="fixed-action-btn">
      <Link to='/new' className="btn-floating btn-large green darken-2">
        <i className="large material-icons">add</i>
      </Link>
    </div>
  )
}

export default AddPostBtn
