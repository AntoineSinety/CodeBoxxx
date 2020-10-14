// add useContext
import React, { Component } from "react";
// import { authMethods } from '../firebase/firebaseAuth';
import { connect } from 'react-redux';
import { handleSignup } from "../redux/actions/auth";

const INITIAL_STATE = {
  email: '',
  password: '',
  error: '',
};

class Signup extends Component{


  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("handleSubmit")
    // authMethods.signup(this.state.email, this.state.password)
    this.props.dispatch(handleSignup(this.state.email, this.state.password));
  }

  handleChange = (e) => {
    console.log("handleChange")
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  handleOnClick = () => {
    console.log("handleOnClick")
  }

    render(){
      const {
        email,
        password,
        error,
      } = this.state;

        return (
            <div className="container-signup">
                <div className="wrapper-signup">
                  <form onSubmit={this.handleSubmit}>
                    <h2>Créer un compte</h2>
                    <input type="text" onChange={this.handleChange} name="email" placeholder='Email' value={email} />
                    <input type="password" onChange={this.handleChange} name="password" placeholder='Password' value={password} />
                    <button className="submit">Créer mon compte</button>
                    <a className="link-signup" href="#" onClick={this.handleOnClick}>Déjà un compte ?</a>
                    {error != "" ? <p style={{ color: 'red' }}>{error}</p> : null}
                  </form>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
	return {
		token: state.token,

	};
}

export default connect(mapStateToProps)(Signup);