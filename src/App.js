import React, { useEffect } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/layout/Navbar';
import Posts from './components/posts/Posts';

import './App.css';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <div>
      <NavBar />
      <div className="container">
        <Posts />
      </div>
    </div>
  );
}

export default App;
