// add useContext
import React, { Component } from "react";
import { authMethods } from '../firebase/firebaseAuth';


const INITIAL_STATE = {
  email: '',
  password: '',
  errors: [],
};

class Signup extends Component{


  constructor(props) {
    super(props);
    this.state = {...INITIAL_STATE}
  }

  handleSubmit = () => {
    console.log("handleSubmit")
    authMethods.signup(this.state.email, this.state.password)
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
        errors,
      } = this.state;

        return (
            <div className="container-signup">
                <div className="wrapper-signup">
                  <form onSubmit={this.handleSubmit}>
                    <h2>Créer un compte</h2>
                    {/* make inputs  */}
                    <input type="text" onChange={this.handleChange} name="email" placeholder='Email' value={email} />
                    <input type="password" onChange={this.handleChange} name="password" placeholder='Password' value={password} />
                    <button className="submit">Créer mon compte</button>
                    <a className="link-signup" href="#" onClick={this.handleOnClick}>Déjà un compte ?</a>
                    {/* {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null} */}
                  </form>
                </div>
            </div>
        );
    }
}


export default Signup;