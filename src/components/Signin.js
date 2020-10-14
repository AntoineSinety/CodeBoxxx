import React, { useContext, useCallback, Component } from "react";
import { firebaseAuth } from '../provider/AuthProvider';
import { withRouter, useHistory } from 'react-router-dom';



class Signin extends Component{

    // const Signin = () => {
    //     const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth)
      
    //     const handleSubmit = e => {
    //       e.preventDefault()
    //       console.log('handleSubmit')
    //       handleSignin()
    //     }
    //     const handleChange = e => {
    //       const { name, value } = e.target
    //       // console.log(inputs)
    //       setInputs(prev => ({ ...prev, [name]: value }))
    //     }
    //     const history = useHistory();
    //     const handleOnClick = useCallback(() => history.push('/signup'), [history]);

    render(){
        return (
            <div className="container-signin">
            <div className="wrapper-signin">
              <form onSubmit={handleSubmit}>
                <h2>Se connecter</h2>
                {/* make inputs  */}
                <input type="text" onChange={handleChange} name="email" placeholder='Email' value={inputs.email} />
                <input type="password" onChange={handleChange} name="password" placeholder='Password' value={inputs.password} />
                <button className="submit" type="submit">se connecter</button>
                <a className="link-signup" href="#" onClick={handleOnClick}>pas de compte?</a>
                {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null}
              </form>
            </div>
          </div>
        );
    }
}

export default Signin;