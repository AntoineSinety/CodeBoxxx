import { combineReducers } from 'redux';

// On importe les sous-reducers
import auth from './auth';
import listingArticles from './listingArticles';
import singleArticle from './singleArticle';

// Combine reducers prend en paramètre un objet
// dont les clés représentent les propriétés du state
// et les valeur les sous-reducers qui s'en occupent
export default combineReducers({
	auth,
	listingArticles,
	singleArticle
});
