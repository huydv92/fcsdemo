
import { ADD_MOVIE, LOGIN, FETCH_SUCCEEDED, FETCH_FAILED } from './actionTypes';

export const LoginAction = (username, password) => {
    return {
        type: LOGIN,
        username,
        password
    }
}