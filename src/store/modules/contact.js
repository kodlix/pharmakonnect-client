import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
  contacts: [],
  contact: {
    creatorId: "",
    accountId: "",
    firstName: "",
    lastName: "",
    phoneNo: "",
    email: ""
  }
};


// Action types
const CONTACT_LOADED = 'pharmaconnect/contact/CONTACT_LOADED';
const CONTACTS_LOADED = 'pharmaconnect/contact/CONTACTS_LOADED';

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case CONTACT_LOADED:
      return {
        ...state,
        contact: action.payload
      }
    case CONTACTS_LOADED:
      return {
        ...state,
        contacts: action.payload
      }
    default: return state;
  }
}


// Action Creators
export function contactLoaded(data) {
  return { type: CONTACT_LOADED, payload: data };
}

export function contactsLoaded(data) {
  return { type: CONTACTS_LOADED, payload: data };
}


//Actions
export function createContact(contact) {
  return dispatch => {
    return agent.Contact.save(contact).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Contact created successfully")));
        dispatch(push("/contacts"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editContact(contact) {
  return dispatch => {
    return agent.Contact.edit(contact).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Contact updated successfully")));
        dispatch(push("/contacts"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deleteContact(id) {
  return dispatch => {
    return agent.Contact.delete(id).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Contact deleted successfully")));
        dispatch(push("/contacts"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadContacts() {
  return dispatch => {
    return agent.Contact.load().then(
      response => {
        dispatch(contactsLoaded(response));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadContactById(id) {
  return dispatch => {
    return agent.Contact.view(id).then(
      response => {
        dispatch(contactLoaded(response));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}
