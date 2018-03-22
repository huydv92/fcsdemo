
//Saga effects
import { call, all } from 'redux-saga/effects';
import { watchFetchMovies } from './movieSagas';
import { login } from './loginSagas';

export default function* rootSaga() {
    yield call(login);              
}