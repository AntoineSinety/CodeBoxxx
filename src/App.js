import React from 'react';
// import logo from './logo.svg';
import Signup from './components/Signup'
import Signin from './components/Signin'
import './App.css';
import './style.css';

import {
  Switch,
  Route,
  BrowserRouter
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Signin} />
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

export default App;
