
import firebaseconfig from '../../firebase/firebaseIndex'
import firebase from 'firebase'

export const FIREBASE_SIGNIN = "FIREBASE_SIGNIN";



// export function fetchArticles() {
//     return function (dispatch, getState) {
//         // const CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

//         return /** stuff */
//     };
// }
export function handleSignup(email, password, setErrors, setToken) {
    return function(dispatch, getState){
        firebase.auth().createUserWithEmailAndPassword(email, password)
        //make res asynchonous so that we can make grab the token before saving it.
        .then(async res => {
            const token = await Object.entries(res.user)[5][1].b
            //grab token from local storage and set to state. 
            console.log(res)

            dispatch({
                type: FIREBASE_SIGNIN,
                token: token
            })
        })
        .catch(err => {
            setErrors(prev => ([...prev, err.message]))
        })
    }
}
