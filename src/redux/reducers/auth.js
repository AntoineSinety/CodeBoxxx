import { FIREBASE_SIGNIN, FIREBASE_SIGNUP, FIREBASE_LOGOUT, CHECK_LOGIN, ERROR_SIGNUP, ERROR_SIGNIN } from '../actions/auth';

export default function (state = {tokenFirebase: null, errorFirebase: null}, action) {
	if (action.type === FIREBASE_SIGNIN) {
		return {...state, tokenFirebase: action.token};
	}
	if (action.type === FIREBASE_SIGNUP) {
		return {...state, tokenFirebase: action.token};
	}
	if (action.type === FIREBASE_LOGOUT) {
		return {...state, tokenFirebase: action.token};
	}
	if (action.type === CHECK_LOGIN) {
		return {...state, tokenFirebase: action.token};
	}
	if (action.type === ERROR_SIGNUP) {
		return {...state, errorSignin: action.error};
	}
	if (action.type === ERROR_SIGNIN) {
		return {...state, errorSignup: action.error};
	}
	return state;
}
