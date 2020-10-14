import firebaseconfig from './firebaseIndex'
import firebase from 'firebase'

export const authMethods = {
    // firebase helper methods go here... 
    signup: (email, password) => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
            //make res asynchonous so that we can make grab the token before saving it.
            .then(async res => {
                const token = await Object.entries(res.user)[5][1].b
                console.log(token)
                //set token to localStorage 
                await localStorage.setItem('tokenCodeBoxx', token)
                // setToken(token)
                //grab token from local storage and set to state. 
                console.log(res)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    },
    signin: (email, password) => {
        //change from create users to...
        firebase.auth().signInWithEmailAndPassword(email, password)
            //everything is almost exactly the same as the function above
            .then(async res => {
                const token = await Object.entries(res.user)[5][1].b
                //set token to localStorage 
                await localStorage.setItem('tokenCodeBoxx', token)
                // setToken(window.localStorage.token)
            }).catch((error) => {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage)
            })
    },
}