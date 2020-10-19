import React, { Component } from 'react';
// import logo from './logo.svg';
import Signup from './components/Signup'
import Signin from './components/Signin'
import Home from './components/Home'
import './App.css';
import './style.css';

import { connect } from 'react-redux';

import { checkLogin } from './redux/actions/auth';


import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    this.props.dispatch(checkLogin());
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            {this.props.token != null ?
              <Route exact path="/" component={Home} />
              : 
              <Route exact path="/" component={Signin} />
            }
            <Route exact path='/signup' component={Signup} />

          </Switch>
        </BrowserRouter>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    token: state.auth.tokenFirebase,
  };
}


export default connect(mapStateToProps)(App);
