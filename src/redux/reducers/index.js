import { combineReducers } from 'redux';

// On importe les sous-reducers
import articlesList from './articlesList';

// Combine reducers prend en paramètre un objet
// dont les clés représentent les propriétés du state
// et les valeur les sous-reducers qui s'en occupent
export default combineReducers({
	articlesList
});
