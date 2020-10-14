
import firebase from 'firebase'

export const FIREBASE_AUTH = "FIREBASE_AUTH";



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
            //set token to localStorage 
            await localStorage.setItem('tokenCodeBoxx', token)
            setToken(token)
            //grab token from local storage and set to state. 
            console.log(res)
        })
        .catch(err => {
            setErrors(prev => ([...prev, err.message]))
        })
    }
}

