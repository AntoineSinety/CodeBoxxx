
import firebaseconfig from '../../firebase/firebaseIndex'
import firebase from 'firebase'

export const LISTING_ARTICLES = "LISTING_ARTICLES";


export function getArticles() {
    return function(dispatch, getState){
        const db = firebase.firestore();
        db.collection("articles").orderBy("creationDate", "desc").get().then((querySnapshot) => {
                let articles = [];
                querySnapshot.forEach(function(doc) {
                    articles.push({id: doc.id, detail: doc.data()})
                });
                dispatch({
                    type: LISTING_ARTICLES,
                    articles: articles
                });
            })
            .catch(function(error) {
                console.log("Error getting document:", error);
            });
    }
}
