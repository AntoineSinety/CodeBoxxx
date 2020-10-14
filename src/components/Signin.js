import React, { Component } from "react";
import { authMethods } from '../firebase/firebaseAuth';
import {withRouter} from 'react-router-dom';


const INITIAL_STATE = {
  email: '',
  password: '',
};

class Signin extends Component {

  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
  }


  handleSignin = () => {
    //changed to handleSingin
    console.log('handleSignin')
    // made signup signin
    authMethods.signin(this.state.email, this.state.password)
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
          <form onSubmit={this.handleSignin}>
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

export default withRouter(Signin);