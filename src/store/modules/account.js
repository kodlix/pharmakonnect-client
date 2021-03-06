import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage } from './notification';
import agent from "../../agent";
import { loadLga, loadStates } from "./location";

// initial values
const account = {
  profile: {
    accountPackage: "Free",
    phoneNumber: "",
    country: "",
    state: "",
    lga: "",
    city: "",
    address: "",
    pcn: "",
    longitude: 0,
    latitude: 0,
    profileImage: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    isPracticing: true,
    gender: "",
    isRegComplete: true,
    organizationName: "",
    organizationType: "",
    numberofEmployees: 0,
    premisesImage: "",
    companyRegistrationNumber: "",
    yearofEstablishment: 0,
    website: "",
    openingTime: "",
    closingTime: "",
    typesOfPractice: "",
  }
};


// Action types
const UPDATE_PROFILE = 'pharmaconnect/account/UPDATE_PROFILE ';
const LOAD_PROFILE = 'pharmaconnect/account/LOAD_PROFILE';
const LOAD_PROFILE_BY_USER = 'pharmaconnect/account/LOAD_PROFILE_BY_USER';




// Reducer
export default function reducer(state = account, action = {}) {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case LOAD_PROFILE:
      return {
        ...state,
        profile: action.payload
      };
    case LOAD_PROFILE_BY_USER:
      return {
        ...state,
        profile: action.payload
      };
    default: return state
  }
};

//Action Creators
export function LoadProfileData(data) {
  return {
    type: LOAD_PROFILE,
    payload: data
  };
}

export function LoadProfileDataByUser(data) {
  return {
    type: LOAD_PROFILE_BY_USER,
    payload: data
  };
}

//Actions

export function loadProfileWithData(email) {
  return dispatch => {
    return agent.Account.load(email).then(
      response => {
        dispatch(LoadProfileData(response))
        dispatch(loadStates(response.country));
        dispatch(loadLga(response.state));
      }
    );
  }
}


export function updateProfileIndividual(email, individual) {
  return dispatch => {
    return agent.Account.updateIndividualProfile(email, individual).then(
      response => {

        //handle success
        updateProfileAsComplete(response);
        dispatch(showSuccessMessage(("Individual profile successfully updated")));
        dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function updateProfileCorporate(email, corporate) {
  // const auth = JSON.parse(localStorage.getItem('auth'));
  return dispatch => {
    return agent.Account.updateCorporateProfile(email, corporate).then(
      response => {
        //handle success
        updateProfileAsComplete(response);
        dispatch(showSuccessMessage(("Corporate profile successfully updated")));
        dispatch(push("/blogs"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function updateProfilePicture(image) {
  return dispatch => {
    return agent.Account.updateProfilePicture(image).then(
      response => {

        //handle success
        dispatch(showSuccessMessage(("Profile image successfully updated")));
        window.location.reload();
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadAccountByUser(id) {
  return dispatch => {
    return agent.Account.getByID(id).then(
      response => {
        //handle success
        dispatch(LoadProfileDataByUser(response))

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

function updateProfileAsComplete(response) {
  if (response.isRegComplete) {
    const user = agent.Auth.current();
    const updatedProfile = { ...user, isRegComplete: true };
    agent.Auth.saveAuthData(updatedProfile);
  }
}


