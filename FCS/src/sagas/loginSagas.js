
import { LOGIN, LOGIN_SUCCEEDED, LOGIN_FAILED } from '../actions/actionTypes';
//Saga effects
import { put, takeLatest } from 'redux-saga/effects';
import { Api } from '../api/Api';

function* fetchLoginAPIFromWS(action) {
    const {username, password} = action;
    try {
        const receivedLogin = yield Api.getLoginFromApi(username, password);   
        console.log('response:', receivedLogin)
        // yield put({ type: LOGIN_SUCCEEDED, receivedMovies: receivedLogin });     
    } catch (error) {        
        yield put({ type: LOGIN_FAILED, error });
    }
}
export function* login() {
    yield takeLatest(LOGIN, fetchLoginAPIFromWS);
}