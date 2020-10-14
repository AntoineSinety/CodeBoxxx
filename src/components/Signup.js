// add useContext
import React, { useContext, useCallback, Component } from "react";
import { firebaseAuth } from "../provider/AuthProvider";
import { withRouter, useHistory } from "react-router-dom";

class Signup extends Component{

    // const { handleSignup, inputs, setInputs, errors } = useContext(firebaseAuth);
    // const history = useHistory();

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     console.log("handleSubmit");
    //     //wait to signup
    //     await handleSignup();
    //     //push home
    //     props.history.push("/");
    // };
    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     // console.log(inputs);
    //     setInputs((prev) => ({ ...prev, [name]: value }));
    // };
    // const handleOnClick = useCallback(() => history.push('/'), [history]);

    render(){
        return (
            <div className="container-signup">
                <div className="wrapper-signup">
                  <form onSubmit={handleSubmit}>
                    <h2>Créer un compte</h2>
                    {/* make inputs  */}
                    <input type="text" onChange={handleChange} name="email" placeholder='Email' value={inputs.email} />
                    <input type="password" onChange={handleChange} name="password" placeholder='Password' value={inputs.password} />
                    <button className="submit">Créer mon compte</button>
                    <a className="link-signup" href="#" onClick={handleOnClick}>Déjà un compte ?</a>
                    {errors.length > 0 ? errors.map(error => <p style={{ color: 'red' }}>{error}</p>) : null}
                  </form>
                </div>
            </div>
        );
    }
}


export default Signup;