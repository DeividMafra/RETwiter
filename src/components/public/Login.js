import React, { useEffect, useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Login = () => {
  const [user, setUser] = useState({
    userName: '',
    password: ''
  });

  const [loading, setLoading] = useState(false);

  const { userName, password } = user;

  const onChange = e => setUser({ ...user, [e.target.name]: e.target.value });


  const onSubmit = e => {
    e.preventDefault();
    if (userName === '' || password === '') {
      M.toast({ html: "Please enter a userName and password, please!" })
    } else {

      registerUser();
      // console.log('title', title)
    }
  }

  const registerUser = async () => {
    setLoading(true);
    const res = await fetch('/auth/login');
    const data = await res.json();
    console.log('data', data)

    // setPosts(data.posts);
    setLoading(false);
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
          <input type="submit" value="Login" className="waves-effect waves-light btn" />
        </div>
      </form>

    </div>
  )
}

export default Login
