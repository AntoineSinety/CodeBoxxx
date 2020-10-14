import { FIREBASE_SIGNIN } from '../actions/auth';

export default function (state = [], action) {
	if (action.type === FIREBASE_SIGNIN) {
		return action.token;
	}
	return state;
}
