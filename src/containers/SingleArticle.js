import React, { Component } from 'react';
// import { firebaseGetData } from '../provider/DisplayProvider';
import MainMenu from '../components/MainMenu';

import { connect } from 'react-redux';
import { getSingleArticle } from "../redux/actions/singleArticle";

import { Link } from "react-router-dom";






class SingleArticle extends Component{
  constructor(props) {
    super(props);

  }


  componentDidMount(){
    //   console.log('antoiiiiiiii', this.props.match.params.slug);
      this.props.dispatch(getSingleArticle(this.props.match.params.slug));
  }


    render(){
        return (
            <div>
              <MainMenu/>
              <div className="container-site">
                <Link to="/articles/">Retour</Link>
                <h1>{this.props.article.title}</h1>
                <div>{this.props.article.code}</div>

                
              </div>
            </div>
          );
    }
}

function mapStateToProps(state) {
	return {
        article: state.singleArticle,
	};
}
export default connect(mapStateToProps)(SingleArticle);