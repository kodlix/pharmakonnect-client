import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
    conversations: [],
    conversation: {
        title: "",
        creatorId: "",
        channelId: "",
        isGroupChat: "",
        updatedOn: "",
        createdBy: "",
        updatedBy: ""
    },
    conversationById: {
        title: "",
        creatorId: "",
        channelId: "",
        isGroupChat: "",
        updatedOn: "",
        createdBy: "",
        updatedBy: ""
    }
};


// Action types
const CONVERSATION_LOADED = 'pharmaconnect/contact/CONVERSATION_LOADED';
const CONVERSATIONS_LOADED = 'pharmaconnect/contact/CONVERSATIONS_LOADED';
const CONVERSATIONBYID_LOADED = 'pharmaconnect/contact/CONVERSATIONBYID_LOADED';


// Reducer
export default function reducer(state = defaultState, action) {
    switch (action.type) {
        case CONVERSATION_LOADED:
            return {
                ...state,
                conversation: action.payload
            }
        case CONVERSATIONBYID_LOADED:
            return {
                ...state,
                conversationById: action.payload
            }
        case CONVERSATIONS_LOADED:
            return {
                ...state,
                conversations: action.payload
            }
        default: return state;
    }
}


// Action Creators
export function conversationLoaded(data) {
    return { type: CONVERSATION_LOADED, payload: data };
}

export function conversationByIdLoaded(data) {
    return { type: CONVERSATIONBYID_LOADED, payload: data };
}

export function conversationsLoaded(data) {
    return { type: CONVERSATIONS_LOADED, payload: data };
}


//Actions
export function createConvasation(convasation) {
    return dispatch => {
        return agent.Conversation.save(convasation).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Sent successfully")));
                dispatch(push("/chat/conversation"));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}


export function createConvasationGateway(convasation) {
    return dispatch => {
        return agent.Conversation.gateway(convasation).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Sent successfully")));
                dispatch(push("/chat/gateway"));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}



export function deleteConversation(id) {
    return dispatch => {
        return agent.Conversation.delete(id).then(
            response => {
                //handle success
                dispatch(showSuccessMessage(("Conversation deleted successfully")));
                dispatch(push("/chat"));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}


export function loadConversation() {
    return dispatch => {
        return agent.Conversation.load().then(
            response => {
                dispatch(conversationLoaded(response));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}

export function loadConversationById(id) {
    return dispatch => {
        return agent.Conversation.view(id).then(
            response => {
                dispatch(conversationByIdLoaded(response));
            },
            error => {
                //handle error
                dispatch(showErrorMessage(error));
            }
        );
    }
}
