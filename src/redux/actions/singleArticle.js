
import firebaseconfig from '../../firebase/firebaseIndex'
import firebase from 'firebase'

export const SINGLE_ARTICLES = "SINGLE_ARTICLES";


export function getSingleArticle(slugArticle) {
    return function(dispatch, getState){
        const db = firebase.firestore();
        db.collection("articles").doc(slugArticle).get().then(function(doc) {

                dispatch({
                    type: SINGLE_ARTICLES,
                    articleOpen: doc.data()
                });
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    }
}
