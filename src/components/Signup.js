// add useContext
import React, { Component } from "react";
import { connect } from 'react-redux';
import { handleSignup } from "../redux/actions/auth";

const INITIAL_STATE = {
  email: '',
  password: '',
};

class Signup extends Component{
  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
  }

  handleSubmit = (event) => {
    event.preventDefault();

    console.log("handleSubmit")
    this.props.dispatch(handleSignup(this.state.email, this.state.password));
  }

  handleChange = (e) => {
    console.log("handleChange")
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state)
  };

  goToSignin = () => {
    this.props.history.push("/")
  }

    render(){
      const {
        email,
        password,
      } = this.state;

        return (
            <div className="container-signup">
                <div className="wrapper-signup">
                  <form onSubmit={this.handleSubmit}>
                    <h2>Créer un compte</h2>
                    <input type="text" onChange={this.handleChange} name="email" placeholder='Email' value={email} />
                    <input type="password" onChange={this.handleChange} name="password" placeholder='Password' value={password} />
                    <button className="submit">Créer mon compte</button>
                    <a className="link-signup" href="#" onClick={this.goToSignin}>Déjà un compte ?</a>
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

export default connect(mapStateToProps)(Signup);