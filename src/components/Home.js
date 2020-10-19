import React, { Component } from 'react';
// import { firebaseGetData } from '../provider/DisplayProvider';
import MainMenu from '../containers/MainMenu';

import { connect } from 'react-redux';
import { handleLogout } from "../redux/actions/auth";


class Home extends Component{
  constructor(props) {
    super(props);
    // this.state = {...INITIAL_STATE}
  }

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