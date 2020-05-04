import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/layout/Navbar';
import Register from './components/public/Register';
import Login from './components/public/Login';
import Logout from './components/layout/Logout';
import Posts from './components/posts/Posts';
import NewPost from './components/posts/NewPost';
import AuthState from './components/context/AuthState'
import PostState from './components/context/PostState'

import './App.css';

const App = () => {

  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <AuthState>
      <PostState>
        <Router>
          <NavBar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Register} />
              <Route exact path='/logout' component={Logout} />
              <Route exact path='/login' component={Login} />
              <Route exact path='/new' component={NewPost} />
              <Route exact path='/posts' component={Posts} />
            </Switch>
          </div>
        </Router>
      </PostState>
    </AuthState>
  );
}

export default App;
