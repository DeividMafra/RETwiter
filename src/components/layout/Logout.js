import React, { Fragment, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const Logout = props => {
  const authContext = useContext(AuthContext);

  const { logOut } = authContext;

  const onLogout = () => {
    logOut();
    props.history.push('/')
  }

  return (
    <Fragment>
      <h2>Are you sure?</h2>
      <input type="submit" onClick={onLogout} value="Yes" className="waves-effect waves-light red white-text btn" />
    </Fragment>

  )
}

export default Logout
