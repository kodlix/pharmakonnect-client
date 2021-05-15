import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
    meeting: {
        accountId: "",
        topic: "",
        duration: "",
        meetingID: "",
        passcode: "",
        description: "",
        durationInHours: 0,
        durationInMinutes: 0,
        startDate: "",
        startTime: "",
        participantVideo: true,
        hostVideo: true,
        waitingRoom: false,
        allowParticipantJoinAnytime: true,
        recordMeeting: "",
        muteParticipantOnEntry: ""
    }
};


// Action types
const CREATE_SCHEDULE_MEETING = 'pharmaconnect/scheduleMeeting/CREATE_SCHEDULE_MEETING';
const LOAD_SCHEDULED_MEETING = 'pharmaconnect/scheduleMeeting/LOAD_SCHEDULED_MEETING';



// Reducer
export default function reducer(state = defaultState, action = {}) {
    switch (action.type) {
        case CREATE_SCHEDULE_MEETING:
            return {
                ...state,
                meeting: action.payload
            };
        case LOAD_SCHEDULED_MEETING:
            return {
                ...state,
                meeting: action.payload
            };
        default: return state
    }
};

//Action Creators
export function CreateMeetingData(data) {
    return {
        type: CREATE_SCHEDULE_MEETING,
        payload: data
    };
}


export function LoadMeetingData(data) {
    return {
        type: LOAD_SCHEDULED_MEETING,
        payload: data
    };
}


//Actions

export function createMeetingData(schedulemeeting) {
    return dispatch => {
        return agent.ScheduleMeeting.save(schedulemeeting).then(
            response => {
                dispatch(showSuccessMessage("Meeting successfully created"));
                dispatch(push("/conference/list"));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function loadMeetings() {
    return dispatch => {
        return agent.ScheduleMeeting.load().then(
            response => {
                dispatch(LoadMeetingData(response));
            },
            error => {
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function editMeeting(id, schedulemeeting) {
    return dispatch => {
        return agent.ScheduleMeeting.edit(id, schedulemeeting).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Meeting successfully updated")));
                dispatch(push(`/conference/list`));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
export function loadMeetingByUser(id) {
    return dispatch => {
        return agent.ScheduleMeeting.view(id).then(
            response => {
                dispatch(LoadMeetingData(response));

            },
            error => {
                //handle error
                // dispatch(showErrorMessage(error));
            }
        );
    }
}
export function deleteMeetingByUser(id) {
    return dispatch => {
        return agent.ScheduleMeeting.delete(id).then(
            response => {
                //handle success
                dispatch(push("/conference/list"));
                dispatch(loadMeetings());
                dispatch(showSuccessMessage(("Meeting successfully deleted")));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
