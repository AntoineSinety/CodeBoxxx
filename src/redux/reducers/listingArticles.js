import { LISTING_ARTICLES } from '../actions/listingArticles';

export default function (state = [], action) {
	if (action.type === LISTING_ARTICLES) {
		return action.articles;
	}
	return state;
}
