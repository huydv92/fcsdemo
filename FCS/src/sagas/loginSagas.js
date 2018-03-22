
import { LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from '../api/Api';

function* fetchLoginAPIFromWS(action) {
    const { username, password } = action;
    const receivedLogin = yield Api.getLoginFromApi(username, password);
    if (receivedLogin) {
        yield put({ type: LOGIN_SUCCEEDED, payload: receivedLogin });
    } else {
        yield put({ type: LOGIN_FAILED, payload: username });
    }
}
export function* login() {
    yield takeLatest(LOGIN, fetchLoginAPIFromWS);
}