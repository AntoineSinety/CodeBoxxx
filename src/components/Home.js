import React, { Component, useContext, useState } from 'react';
import { firebaseAuth } from '../provider/AuthProvider';
import { withRouter, useHistory, Redirect, Link } from 'react-router-dom';
// import { firebaseGetData } from '../provider/DisplayProvider';
import { _getArticlesOfUser } from '../api.js';
import MainMenu from '../container/MainMenu';


class Home extends Component{

    // const history = useHistory();

    // // const { getArticlesOfUser } = useContext(firebaseGetData)
    // const { handleSignout, token } = useContext(firebaseAuth)
    // const [nameLocal, setName] = useState();
    // const [articles, setArticles] = useState([]);
  
    // function goToProfile() {
    //   history.push('/profile');
    // }
    // function goToCreer() {
    //   history.push('/create');
    // }
  
    // var getNameOfUser = async () => {
    //   var nameLocal = await localStorage.getItem("name")
    //   setName(nameLocal)
    // }
  
    // getNameOfUser().then(() => {
    //   if (nameLocal != null) {
    //     _getArticlesOfUser(nameLocal).then((articles) => {
    //       if (articles !== []) {
    //         setArticles(articles)
    //       }
    //     })
    //   }
    // });

    render(){
        return (
            <div>
              {!token ? <Redirect to="/" /> : console.log("z")}
              <MainMenu/>
              <div>
                <ul>
                  {articles.map(article =>
                    <li key={article.title}>
                      <Link to="/create">{article.title}</Link>
                      <div>{article.creationDate.toDate().toString()}</div>
                      {/* <div>{article.code}</div> */}
                    </li>
                  )}
                </ul>
              </div>
            </div>
          );
    }
}

export default Home;