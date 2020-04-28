import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/layout/Navbar';
import AddPostBtn from './components/layout/AddPostBtn';
import Posts from './components/posts/Posts';
import NewPost from './components/posts/NewPost';

import './App.css';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <div>
      <Router>

        <NavBar />
        <div className="container">
          <AddPostBtn />
          {/* <Posts /> */}
          <Switch>
            <Route exact path='/new' component={NewPost} />
            <Route exact path='/' component={Posts} />
          </Switch>

        </div>
      </Router>
    </div>
  );
}

export default App;
