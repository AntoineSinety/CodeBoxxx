import React, { Component } from 'react';
// import { firebaseGetData } from '../provider/DisplayProvider';
import MainMenu from '../components/MainMenu';

import { connect } from 'react-redux';
import { handleLogout } from "../redux/actions/auth";






class Home extends Component{
  constructor(props) {
    super(props);

  }


    handleLogout = () =>{
      this.props.dispatch(handleLogout());
    };

    render(){
        return (
            <div>
              <MainMenu/>
              <div className="container-site">
                salut
                <button onClick={this.handleLogout}>FIREBASE_LOGOUT</button>


              </div>
            </div>
          );
    }
}

function mapStateToProps(state) {
	return {
    token: state.auth.tokenFirebase,
    error: state.auth.errorFirebase,
	};
}
export default connect(mapStateToProps)(Home);