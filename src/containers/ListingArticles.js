import React, { Component } from 'react';
// import { firebaseGetData } from '../provider/DisplayProvider';
import MainMenu from '../components/MainMenu';

import { connect } from 'react-redux';
import { getArticles } from "../redux/actions/listingArticles";






class ListingArticles extends Component{
  constructor(props) {
    super(props);

  }


  componentDidMount(){
      this.props.dispatch(getArticles());
      console.log('antoiiiiiiii', this.props.articles);
  }

    render(){
        return (
            <div>
              <MainMenu/>
              <div className="container-site">
                
                <h1>COUCOU</h1>

                 {
                    this.props.articles.map( function(article, index) {
                       return (
                        <div key={article.index}>
                            <h2>{article.title}</h2>
                        </div>
                       )
                    })
                 }

              </div>
            </div>
          );
    }
}

function mapStateToProps(state) {
	return {
        articles: state.listingArticles,
	};
}
export default connect(mapStateToProps)(ListingArticles);