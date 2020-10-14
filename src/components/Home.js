import React, { Component } from 'react';
// import { firebaseGetData } from '../provider/DisplayProvider';
import MainMenu from '../containers/MainMenu';


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
              {/* <MainMenu/> */}
              <div>
                salut
              </div>
            </div>
          );
    }
}

export default (Home);