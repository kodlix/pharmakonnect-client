import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
  setting: {
    pollTypes: [],
    questionTypes: []
  },
  polls: [],
  poll: {
    title: "",
    description: "",
    url: "",
    accessCode: "",
    requiresLogin: false,
    type: "",
    hint: "",
    startDate: "",
    endDate: "",
    questions: [
      {
        SN: 1,
        pollType: "",
        questionType: "",
        content: "",
        options: [
          {
            questionType: "",
            content: "",
            isCorrect: false
          }
        ]
      }
    ]
  }
};

// Action types
const POLL_LOADED = 'pharmakonnect/poll/POLL_LOADED';
const POLLS_LOADED = 'pharmakonnect/poll/POLLS_LOADED';
const POLL_SETTING_LOADED = 'pharmakonnect/poll/POLL_SETTING_LOADED';

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case POLL_LOADED:
      return {
        ...state,
        poll: action.payload
      }
    case POLLS_LOADED:
      return {
        ...state,
        polls: action.payload
      }
      case POLL_SETTING_LOADED:
      return {
        ...state,
        setting: action.payload
      }
    default: return state;
  }
}

// Action Creators
export function pollLoaded(data) {
  return { type: POLL_LOADED, payload: data };
}


export function pollsLoaded(data) {
  return { type: POLLS_LOADED, payload: data };
}

export function pollSettingLoaded(data) {
  return { type: POLL_SETTING_LOADED, payload: data };
}


//Actions
export function createPoll(poll) {

  return dispatch => {
    return agent.Poll.save(poll).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Poll created")));
        dispatch(push("/polls"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editPoll(id, poll) {
  
  return dispatch => {
    return agent.Poll.edit(id, poll).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Poll has been updated")));
        dispatch(push(`/poll/view/${id}`));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deletePoll(id) {
  return dispatch => {
    return agent.Poll.delete(id).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Poll has been deleted")));
        dispatch(push("/polls"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadPolls(pageNumber) {
  return dispatch => {
    return agent.Poll.load(pageNumber).then(
      response => {
        //handle success
        dispatch(pollsLoaded(response));

      },
    );
  }
}

export function loadPoll(id) {
  return dispatch => {
    return agent.Poll.view(id).then(
      response => {
        //handle success
        dispatch(pollLoaded(response));
      }
    );
  }
}

export function loadPollSetting() {
  return dispatch => {
    return agent.Poll.loadSetting().then(
      response => {
        //handle success
        dispatch(pollSettingLoaded(response));
      }
    );
  }
}
