import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated } = authContext;

  return (

    <nav style={{ marginBottom: '30px' }} className="green">
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo">Bird Sound</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">

          <li><Link to='/'>Register</Link></li>

          {isAuthenticated
            ? <li><Link to='/logout'>Logout</Link></li>
            : <li><Link to='/login'>Login</Link></li>
          }

          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/about'>About</Link></li>

        </ul>
      </div>
    </nav>
  )
}

export default Navbar
