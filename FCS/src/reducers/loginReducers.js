INITIAL = {
    username: '',
    auth: false
}

import { LOGIN_FAILED, LOGIN_SUCCEEDED } from '../actions/actionTypes';
const loginReducers = (state = INITIAL, action) => {
    switch (action.type) {
        case LOGIN_SUCCEEDED:
            return { ...state, username: action.payload.username, auth: true };
        case LOGIN_FAILED:
            return { ...state, username: action.payload, auth: false };
        default:
            return state;
    }
}

export default loginReducers;