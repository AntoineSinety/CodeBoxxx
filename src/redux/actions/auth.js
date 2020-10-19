
import firebaseconfig from '../../firebase/firebaseIndex'
import firebase from 'firebase'

export const FIREBASE_SIGNIN = "FIREBASE_SIGNIN";
export const FIREBASE_SIGNUP = "FIREBASE_SIGNUP";
export const FIREBASE_LOGOUT = "FIREBASE_LOGOUT";
export const CHECK_LOGIN = "CHECK_LOGIN";
export const ERROR_SIGNUP = "ERROR_SIGNUP";
export const ERROR_SIGNIN = "ERROR_SIGNIN";



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
            await localStorage.setItem('tokenCodeBoxx', token)
            console.log(token);
            dispatch({
                type: FIREBASE_SIGNUP,
                token: token.g
            })
        })
        .catch(error => {
            var errorMessage = error.message;
            dispatch({
                type: ERROR_SIGNUP,
                errorSignup: errorMessage
            })
        })
    }
}

export function handleSignin(email, password) {
    return function(dispatch, getState){
        //change from create users to...
        return firebase.auth().signInWithEmailAndPassword(email, password)
            //everything is almost exactly the same as the function above
            .then(async res => {
                const token = await Object.entries(res.user)[5][1].b
                //set token to localStorage 
                await localStorage.setItem('tokenCodeBoxx', token)
                dispatch({
                    type: FIREBASE_SIGNIN,
                    token: token.g
                })
                
                // setToken(window.localStorage.token)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
                dispatch({
                    type: ERROR_SIGNIN,
                    errorSignin: errorMessage
                })
            })
    }
}
export function handleLogout() {
    return function(dispatch, getState){
        //change from create users to...
        localStorage.removeItem('tokenCodeBoxx')
        return dispatch({
                type: FIREBASE_LOGOUT,
                token: null
            })
    }
}
export function checkLogin() {
    return function(dispatch, getState){
        //change from create users to...
        return dispatch({
                type: CHECK_LOGIN,
                token: localStorage.getItem('tokenCodeBoxx')
            })
    }
}
