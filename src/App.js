import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/layout/Navbar';
import AddPostBtn from './components/layout/AddPostBtn';
import Register from './components/public/Register';
import Login from './components/public/Login';
import Posts from './components/posts/Posts';
import NewPost from './components/posts/NewPost';
import AuthState from './components/context/AuthState'

import './App.css';

const App = () => {
  useEffect(() => {
    //Initialize Materialize JS
    M.AutoInit();
  });

  return (
    <AuthState>

      <div>
        <Router>

          <NavBar />
          <div className="container">
            <AddPostBtn />
            <Switch>
              <Route exact path='/' component={Register} />
              <Route exact path='/Login' component={Login} />
              <Route exact path='/new' component={NewPost} />
              <Route exact path='/posts' component={Posts} />
            </Switch>

          </div>
        </Router>
      </div>
    </AuthState>
  );
}

export default App;
