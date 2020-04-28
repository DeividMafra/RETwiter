import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

    <nav style={{ marginBottom: '30px' }} className="green">
      <div className="nav-wrapper">
        <Link to='/' className="brand-logo">Bird Sound</Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link to='/'>Register</Link></li>
          <li><Link to='/Login'>Login</Link></li>
          <li><Link to='/posts'>Posts</Link></li>
          <li><Link to='/about'>About</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
