import { FIREBASE_AUTH } from '../actions/auth';

export default function (state = [], action) {
	if (action.type === FIREBASE_AUTH) {
		return action.token;
	}
	return state;
}
