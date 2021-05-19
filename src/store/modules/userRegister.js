import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
    registeredUsers: {}
};


// Action types
const LOAD_REGISTERED_USERS = 'pharmaconnect/eventType/LOAD_REGISTERED_USERS';



// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case LOAD_REGISTERED_USERS:
            return {
                ...state,
                registeredUsers: action.payload
            };
        default: return state
    }
};

//Action Creators

export function LoadRegUsers(data) {
    return {
        type: LOAD_REGISTERED_USERS,
        payload: data
    };
}

//Actions

export function loadRegUsers() {
    return dispatch => {
        return agent.UserRegister.load().then(
            response => {
                dispatch(LoadRegUsers(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}
