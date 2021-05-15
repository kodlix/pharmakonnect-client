import { push } from "connected-react-router";
import { showErrorMessage, showSuccessMessage, showInfoMessage } from './notification';
import agent from "../../agent";

// initial values
const defaultState = {
  jobVacanciesByCompany: [],
  jobVacancies: [],
  jobVacancyByCompany: {
    // companyUrl: "",
    // contactType: "",
    // jobUrl: "",
    // jobLocation: "",
    // maxSalary: "",
    // minSalary: "",
    // companyRegistrationNumber: "",
    // nameOfCorporation: "",
    // jobDescription: "",
    // minimumQualification: "",
    // otherSkills: "",
    // jobTitle: "",
    // startDate: "",
    // endDate: "",
    // yearOfIncorporation: "",
    // workExperienceInYears: ""
  }
};



// Action types
const JOBVACANCYBYCOMPANYLOADED = 'JOBVACANCYBYCOMPANYLOADED';
const JOBVACANCIESBYCOMPANYLOADED = 'JOBVACANCIESBYCOMPANYLOADED';
const JOBVACANCIESLOADED = 'JOBVACANCIESLOADED';

// Reducer
export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case JOBVACANCIESLOADED:
      return {
        ...state,
        jobVacancies: action.payload
      }
    case JOBVACANCYBYCOMPANYLOADED:
      return {
        ...state,
        jobVacancyByCompany: action.payload
      }
    case JOBVACANCIESBYCOMPANYLOADED:
      return {
        ...state,
        jobVacanciesByCompany: action.payload
      }
    default: return state;
  }
}


// converter
export const formatter = {
  toMoney: (input) => '₦' + (input).toLocaleString('en-US', {
    style: 'currency',
    currency: 'NGN',
  }).replace('NGN', ''),
  //  '₦ ' + input.toFixed(2).toString(),
  toISOStringFormat: (date) => new Date(date.getTime() - (date.getTimezoneOffset() * 60000))
    .toISOString().substr(0,10) + "T00:00:00.000Z"
}

// Action Creators
export function JobVacancyByCompanyLoaded(data) {
  return { type: JOBVACANCYBYCOMPANYLOADED, payload: data };
}


export function JobVacanciesByCompanyLoaded(data) {
  return { type: JOBVACANCIESBYCOMPANYLOADED, payload: data };
}

export function JobVacanciesLoaded(data) {
  return { type: JOBVACANCIESLOADED, payload: data };
}



//Actions
export function createJobVacancy(jobVacancy) {
  return dispatch => {
    return agent.JobVacancy.save(jobVacancy).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Job Vacancy created")));
        dispatch(push("/jobvacancy"));
      },
      error => {
        //handle error 
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function editJobVacancy(id, jobVacancy) {
  return dispatch => {
    return agent.JobVacancy.edit(id, jobVacancy).then(
      response => {
        //handle success
        dispatch(showSuccessMessage(("Job Vacancy has been updated")));
        dispatch(push(`/jobvacancy/view/${id}`));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}


export function approveJobVacancy(id, approval) {
  return dispatch => {
    return agent.JobVacancy.approve(id, approval).then(
      response => {
        //handle success
        // dispatch(showSuccessMessage(("Job Vacancy has been approved")));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function rejectJobVacancy(id, rejection) {
  return dispatch => {
    return agent.JobVacancy.reject(id, rejection).then(
      response => {
        //handle success
        // dispatch(showSuccessMessage(("Job Vacancy has been rejected")));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function deleteJobVacancy(id) {
  return dispatch => {
    return agent.JobVacancy.delete(id).then(
      response => {
        //handle success
        // dispatch(showSuccessMessage(("Job Vacancy has been deleted")));
        dispatch(push("/jobvacancy"));
      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadJobVacanciesByCompany(pageNumber) {
  return dispatch => {
    return agent.JobVacancy.load(pageNumber).then(
      response => {
        //handle success
        dispatch(JobVacanciesByCompanyLoaded(response));

      },
      error => {
        //handle error
        // dispatch(showErrorMessage(error));
      }
    );
  }
}
export function loadJobVacancies(pageNumber) {
  return dispatch => {
    return agent.JobVacancy.loadAll(pageNumber).then(
      response => {
        //handle success
        dispatch(JobVacanciesLoaded(response));

      },
      error => {
        //handle error
        dispatch(showErrorMessage(error));
      }
    );
  }
}

export function loadJobVacancyByCompany(id) {
  return dispatch => {
    return agent.JobVacancy.view(id).then(
      response => {
        //handle success
        dispatch(JobVacancyByCompanyLoaded(response));

      },
      error => {
        //handle error
        // dispatch(showErrorMessage(error));
      }
    );
  }
}
