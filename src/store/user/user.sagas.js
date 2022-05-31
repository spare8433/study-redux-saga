import {
	all,
	call,
	fork,
	put,
	takeLatest
} from 'redux-saga/effects'
import { longinAPI_success } from '../../api'
import { logInFailure, logInSuccess } from './user.actions';
import { LOG_IN_REQUEST } from './user.types';


function* logIn(action) {
	console.log(action);
	console.log('login requset');
  try {
		console.log('login start');
    const data = yield call(longinAPI_success,action.req);
		console.log('api request success');
		console.log(data)
		console.log('login success');
    yield put( logInSuccess(data) );
  } catch (error) {
		console.error(error)
    yield put( logInFailure(error) );
		console.log('login fail');
  }
}

function* watchLogIn() {
	yield takeLatest(LOG_IN_REQUEST, logIn)
}

export default function* userSaga() {
	yield all([fork(watchLogIn)])
}