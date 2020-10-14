import React, { Component } from 'react';
// import logo from './logo.svg';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Home from './components/Home'
import './App.css';
import './style.css';

import { connect } from 'react-redux';


import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {this.props.token == null ?
              <Route exact path="/" component={Signin} />
              : <Route exact path="/" component={Home} />}
            <Route exact path='/signup' component={Signup} />
            {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth
  };
}


export default connect(mapStateToProps)(App);
