import React, { Component } from "react";
// import { authMethods } from '../firebase/firebaseAuth';
import {withRouter} from 'react-router-dom';

import { connect } from 'react-redux';
import { handleSignin } from "../redux/actions/auth";


const INITIAL_STATE = {
  email: '',
  password: '',
};

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
  }

  handleSubmit = (event) => {
    event.preventDefault();
    //changed to handleSingin
    console.log('handleSignin')
    // made signup signin
    this.props.dispatch(handleSignin(this.state.email, this.state.password));

  }


  handleChange = (e) => {
    console.log("handleChange")
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  goSignUp = () => {
    this.props.history.push("/signup")
  }

  render() {

    const {
      email,
      password,
    } = this.state;

    return (
      <div className="container-signin">
        <div className="wrapper-signin">
          <form onSubmit={this.handleSubmit}>
            <h2>Se connecter</h2>
            {/* make inputs  */}
            <input type="text" onChange={this.handleChange} name="email" placeholder='Email' value={email} />
            <input type="password" onChange={this.handleChange} name="password" placeholder='Password' value={password} />
            <button className="submit" type="submit">se connecter</button>
            <a className="link-signup" href="#" onClick={this.goSignUp}>pas de compte?</a>
          </form>
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
	return {
		token: state.auth
	};
}

export default connect(mapStateToProps)(Signin);