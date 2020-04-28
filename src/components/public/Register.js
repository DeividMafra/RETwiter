import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = props => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    username: '',
    password: ''
  });

  const { register, isAuthenticated } = authContext;
  const { username, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (username === '' || password === '') {
      M.toast({ html: "Please enter a username and password, please!" })
    } else {
      register({
        username, password
      });
      // props.history.push('/posts')
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push('/posts')
    }
    //eslint-disable-next-line
  }, [isAuthenticated, props.history])


  return (
    <div>
      <h4>Register</h4>
      <br />
      <form onSubmit={onSubmit}>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="username"
              value={username}
              onChange={onChange}
            />
            <label htmlFor="username" className="active">User Name</label>
          </div>
        </div>

        <div className="row">
          <div className="input-field">
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <label htmlFor="password" className="active">Password</label>
          </div>
        </div>

        <div>
          <input type="submit" value="Register" className="waves-effect waves-light btn" />
        </div>
      </form>

    </div>
  )
}

export default Register
