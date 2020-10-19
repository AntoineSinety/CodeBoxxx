import React, { Component } from 'react';

import { connect } from 'react-redux';



import { Link } from "react-router-dom";

class MainMenu extends Component{
  constructor(props) {
    super(props);
  }

    render(){
        return (
            <div className="main-menu">
                <div className="site-brand">
                    <img className="logo" src="https://antoinesinety.github.io/CodeBox/static/media/logo-code.08072dd0.svg" alt="Logo CodeBoxxx"/>
                    <span>CodeBoxxx</span>
                </div>
                
                 <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/freecodecamp">freeCodeCamp</Link>
                    </li>
                    <li>
                        <Link to="/topics">Topics</Link>
                    </li>
                </ul>
            
            </div>
          );
    }
}

// function mapStateToProps(state) {

// }
export default MainMenu;