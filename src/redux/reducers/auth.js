import { FIREBASE_SIGNIN, FIREBASE_SIGNUP, FIREBASE_LOGOUT, CHECK_LOGIN } from '../actions/auth';

export default function (state = null, action) {
	if (action.type === FIREBASE_SIGNIN) {
		return action.token;
	}
	if (action.type === FIREBASE_SIGNUP) {
		return action.token;
	}
	if (action.type === FIREBASE_LOGOUT) {
		return action.token;
	}
	if (action.type === CHECK_LOGIN) {
		return action.token;
	}
	return state;
}
