import React, { Component } from 'react';
// import logo from './logo.svg';
import Signup from './containers/auth/Signup'
import Signin from './containers/auth/Signin'
import Home from './containers/Home'
import CodeCampRss from './containers/CodeCampRss'
import './App.css';
import './style.css';

import { connect } from 'react-redux';

import { checkLogin } from './redux/actions/auth';

import { Switch, Route, BrowserRouter } from "react-router-dom";
import AddArticle from './containers/AddArticle';
import ListingArticles from './containers/ListingArticles';

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
            <Route exact path="/freecodecamp" component={CodeCampRss}/>
            <Route exact path="/addarticle" component={AddArticle}/>
            <Route exact path="/articles" component={ListingArticles}/>


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
