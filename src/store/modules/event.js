import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
    events: {
    },
    event: {}
};


// Action types
const CREATE_EVENT = 'pharmaconnect/event/CREATE_EVENT';
const LOAD_EVENTS = 'pharmaconnect/event/LOAD_EVENTS';
const LOAD_EVENT = 'pharmaconnect/event/LOAD_EVENT';



// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case CREATE_EVENT:
            return {
                ...state,
                events: action.payload
            };
        case LOAD_EVENTS:
            return {
                ...state,
                events: action.payload
            };
        case LOAD_EVENT:
            return {
                ...state,
                event: action.payload
            };
        default: return state
    }
};

//Action Creators
export function CreateEvent(data) {
    return {
        type: CREATE_EVENT,
        payload: data
    };
}

export function LoadEvents(data) {
    return {
        type: LOAD_EVENTS,
        payload: data
    };
}

export function LoadEvent(data) {
    return {
        type: LOAD_EVENT,
        payload: data
    };
}


//Actions

export function createEvent(event) {
    return dispatch => {
        return agent.Event.save(event).then(
            response => {
                dispatch(showSuccessMessage("Event successfully created"));
                dispatch(push("/events"));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function loadEvents(pageNumber) {
    return dispatch => {
        return agent.Event.loadAll(pageNumber).then(
            response => {
                dispatch(LoadEvents(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}
export function loadMyEvents(pageNumber) {
    return dispatch => {
        return agent.Event.load(pageNumber).then(
            response => {
                dispatch(LoadEvents(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function editEvent(id, event) {
    return dispatch => {
        return agent.Event.edit(id, event).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Event successfully updated")));
                dispatch(push(`/events`));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
export function loadEvent(id) {
    return dispatch => {
        return agent.Event.view(id).then(
            response => {
                dispatch(LoadEvent(response));

            },
            error => {
                //handle error
                // dispatch(showErrorMessage(error));
            }
        );
    }
}
export function deleteEvent(id) {
    return dispatch => {
        return agent.Event.delete(id).then(
            response => {
                //handle success
                dispatch(push('/events'));
                dispatch(LoadEvents());
                dispatch(showSuccessMessage(("Event Type successfully deleted")));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}


export function loadPublishedEvents(pageNumber) {
    return dispatch => {
        return agent.Event.loadAllPublished(pageNumber).then(
            response => {
                //handle success
                dispatch(LoadEvents(response));

            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function loadUserEvents(search, pageNumber) {
    return dispatch => {
        return agent.Event.loadByUser(search, pageNumber).then(
            response => {
                //handle success
                dispatch(LoadEvents(response));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
