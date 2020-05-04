import React, { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

import NavBar from './components/layout/Navbar';
import Register from './components/public/Register';
import Login from './components/public/Login';
import Posts from './components/posts/Posts';
import NewPost from './components/posts/NewPost';
// import AuthContext from './components/context/AuthContext';
import AuthState from './components/context/AuthState'
import PostState from './components/context/PostState'

import './App.css';

const App = () => {

  // const authContext = useContext(AuthContext);
  // const { isAuthenticated } = authContext;
  useEffect(() => {

    //Initialize Materialize JS
    M.AutoInit();

    //Check token to hide / show addButton

  });




  return (
    <AuthState>
      <PostState>

        <div>
          <Router>

            <NavBar />
            <div className="container">
              {/* {isAuthenticated && <AddPostBtn />} */}
              {/* {localStorage.getItem("token") !== null && <AddPostBtn />} */}

              <Switch>
                <Route exact path='/' component={Register} />
                <Route exact path='/Login' component={Login} />
                <Route exact path='/new' component={NewPost} />
                <Route exact path='/posts' component={Posts} />
              </Switch>

            </div>
          </Router>
        </div>
      </PostState>
    </AuthState>
  );
}

export default App;
