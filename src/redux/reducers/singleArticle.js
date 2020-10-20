import { SINGLE_ARTICLES } from '../actions/singleArticle';

export default function (state = [], action) {
	if (action.type === SINGLE_ARTICLES) {
		return action.articleOpen;
	}
	return state;
}
