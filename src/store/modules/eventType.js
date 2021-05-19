import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
    eventTypes: {}
};


// Action types
const CREATE_EVENT_TYPES = 'pharmaconnect/eventType/CREATE_EVENT_TYPES';
const LOAD_EVENT_TYPES = 'pharmaconnect/eventType/LOAD_EVENT_TYPES';



// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case CREATE_EVENT_TYPES:
            return {
                ...state,
                eventTypes: action.payload
            };
        case LOAD_EVENT_TYPES:
            return {
                ...state,
                eventTypes: action.payload
            };
        default: return state
    }
};

//Action Creators
export function CreateEventType(data) {
    return {
        type: CREATE_EVENT_TYPES,
        payload: data
    };
}

export function LoadEventType(data) {
    return {
        type: LOAD_EVENT_TYPES,
        payload: data
    };
}


//Actions
export function createEventType(eventtype) {
    return dispatch => {
        return agent.EventType.save(eventtype).then(
            response => {
                dispatch(showSuccessMessage("Event Type successfully created"));
                dispatch(push("/eventtypes"));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function loadEventTypes() {
    return dispatch => {
        return agent.EventType.load().then(
            response => {
                dispatch(LoadEventType(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function editEventType(id, eventtype) {
    return dispatch => {
        return agent.EventType.edit(id, eventtype).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Event type successfully updated")));
                dispatch(push(`/eventtypes`));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
export function loadEventType(id) {
    return dispatch => {
        return agent.EventType.view(id).then(
            response => {
                dispatch(LoadEventType(response));

            },
            error => {
                //handle error
                // dispatch(showErrorMessage(error));
            }
        );
    }
}
export function deleteEventType(id) {
    return dispatch => {
        return agent.EventType.delete(id).then(
            response => {
                //handle success
                dispatch(push('/eventtypes'));
                dispatch(LoadEventType());
                dispatch(showSuccessMessage(("Event Type successfully deleted")));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
