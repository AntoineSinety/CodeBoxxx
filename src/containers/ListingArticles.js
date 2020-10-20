import React, { Component } from 'react';
// import { firebaseGetData } from '../provider/DisplayProvider';
import MainMenu from '../components/MainMenu';

import { connect } from 'react-redux';
import { getArticles } from "../redux/actions/listingArticles";

import { Link } from "react-router-dom";





class ListingArticles extends Component{
  constructor(props) {
    super(props);

  }


  componentDidMount(){
      this.props.dispatch(getArticles());
      console.log('antoiiiiiiii', this.props.articles);
  }
  slugify = ( title ) =>{
      return title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, ''); 
  }

    render(){
        return (
            <div>
              <MainMenu/>
              <div className="container-site">
                
                <h1>Test</h1>

                 { (this.props.articles) && this.props.articles.map((article, index) => {
                       return (
                        <div key={article.id}>
                            <Link to={`/articles/${article.id}`}>{article.detail.title}</Link>
                            {/* <a href={"articles/" + this.slugify(article.detail.title)}></a> */}
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