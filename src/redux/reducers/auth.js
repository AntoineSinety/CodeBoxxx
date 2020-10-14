import { FIREBASE_SIGNIN, FIREBASE_SIGNUP } from '../actions/auth';

export default function (state = [], action) {
	if (action.type === FIREBASE_SIGNIN) {
		return action.token;
	}
	if (action.type === FIREBASE_SIGNUP) {
		return action.token;
	}
	return state;
}
