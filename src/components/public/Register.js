import React, { useEffect, useState, useContext } from 'react';
import AuthContext from '../context/AuthContext';
import M from 'materialize-css/dist/js/materialize.min.js';

const Register = () => {
  const authContext = useContext(AuthContext);
  const [user, setUser] = useState({
    userName: '',
    password: ''
  });

  const { register } = authContext;
  const [loading, setLoading] = useState(false);

  const { userName, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });


  const onSubmit = e => {
    e.preventDefault();
    if (userName === '' || password === '') {
      M.toast({ html: "Please enter a userName and password, please!" })
    } else {
      register({
        userName, password
      });
    }
  }


  return (
    <div>
      <h4>Register / Login</h4>
      <br />
      <form onSubmit={onSubmit}>

        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="userName"
              value={userName}
              onChange={onChange}
            />
            <label htmlFor="userName" className="active">User Name</label>
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
