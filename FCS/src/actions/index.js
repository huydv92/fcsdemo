
import { ADD_MOVIE, LOGIN, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const LoginAction = (username, password) => {
    return {
        type: LOGIN,
        username,
        password
    }
}

export const addMovieAction = (newMovie) => {
    return {
        type: ADD_MOVIE,
        //newMovie: newMovie
        newMovie
    }
}
//Action sent by Redux-saga
export const fetchSuccessAction = (receivedMovies) => {
    return {
        type: FETCH_SUCCEEDED,
        receivedMovies
    }
}

export const fetchFailedAction = (error) => {
    return {
        type: FETCH_FAILED,
        error
    }
}

