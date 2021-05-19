import superagentPromise from 'superagent-promise';
import _superagent from 'superagent';
import store from './store/store';
import { offlineErrorOccured } from './store/modules/error';
import { showOfflineError } from './store/modules/notification';

const superagent = superagentPromise(_superagent, global.Promise);

// export const API_ROOT = 'http://localhost:4500';  //DEV
export const API_ROOT = 'https://pharmakonnect-api.herokuapp.com'; //PRODUCTION
export const IMAGE_URL = API_ROOT + '/account/uploads/';

let token = null;
const responseBody = res => res.body;

const getAuthToken = () => {
  const auth = JSON.parse(window.localStorage.getItem('auth'));
  const token = auth ? auth.token : null;
  return token;
}

export const tokenPlugin = req => {
  req.set('Accept', 'application/json');

  token = getAuthToken();
  if (token) {
    req.set('Authorization', `Bearer ${token}`);
  }

  req.on('error', (error) => {
    const { dispatch } = store();
    if (error.status === undefined) {
      dispatch(offlineErrorOccured());
      dispatch(showOfflineError());
    }

  });
  req.on('response', function (res) {
    if (res.status === 401) {
      // store.dispatch(logout())
    }
  });

}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  logError: (data) =>
    requests.post('/v1/log/error', { data }),
  isAuth: () => {
    const token = getAuthToken();
    return !!token;
  },
  setToken: () => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    token = auth.token;
  },
  saveAuthData: (_user) => {
    window.localStorage.setItem('auth', JSON.stringify(_user));
    token = _user.token;
  },
  saveFirstTime: () => {
    window.localStorage.setItem('ftime', true);
  },
  loggedInOnce: () => {
    return !!window.localStorage.getItem('ftime');
  },
  logout: () => {
    window.localStorage.removeItem('auth')
    token = null
  },

  current: () => JSON.parse(window.localStorage.getItem('auth')),
  login: (email, password) =>
    requests.post('/account/login', { email, password }),
  register: data =>
    requests.post('/account/register', data),
  checkValidEmail: email =>
    requests.post(`/account/email/is-valid`, { email }),
  forgotPassword: email =>
    requests.post(`/account/forgotPassword`, { email }),
  updatePassword: (data) =>
    requests.put(`/account/updatepassword`, data),
  resetPassword: (email, password) =>
    requests.post(`/account/password/reset`, { email, password }),
  sendResetToken: (email) =>
    requests.post(`/account/password/email`, { email }),
  verifyResetToken: (email, token) =>
    requests.post(`/account/password/verify-token`, { email, token })
}

const User = {
  save: (user) =>
    requests.post('/user', user),
  load: () =>
    requests.get('/user'),
  edit: (user) =>
    requests.put('/user', user),
  delete: (id) =>
    requests.del(`/user/${id}`),
  view: (id) =>
    requests.get(`/user/${id}`)
};


const Contact = {
  save: (data) =>
    requests.post('/contact', data),
  load: () =>
    requests.get('/contact'),
  edit: (data) =>
    requests.put('/contact', data),
  delete: (id) =>
    requests.del(`/contact/${id}`),
  view: (id) =>
    requests.get(`/contact/${id}`)
};


const Conversation = {
  save: (data) =>
    requests.post('/chat/conversation', data),
  load: () =>
    requests.get(`/chat`),
  delete: (id) =>
    requests.del(`/chat/${id}`),
  gateway: (data) =>
    requests.post(`/chat/gateway`, data),
  view: (id) =>
    requests.get(`/chat/conversationparticipant/${id}`)
};

const Sector = {
  save: (data) =>
    requests.post('/sector', data),
  load: () => requests.get('/sector'),
  search: (param) => requests.get('/sector' + param),
  edit: (sector) =>
    requests.put('/sector', sector),
  delete: (id) =>
    requests.del(`/sector/${id}`),
  view: (id) =>
    requests.get(`/sector/${id}`)
};

const Account = {
  updateIndividualProfile: (email, data) =>
    requests.put(`/account/individual/${email}`, data),
  updateProfilePicture: (image) =>
    requests.put('/account/uploads', image),
  load: (email) => requests.get(`/account/getbyemail/${email}`),
  updateCorporateProfile: (email, data) =>
    requests.put(`/account/cooperate/${email}`, data),
  organizationName: () =>
    requests.get('/account/corporate/organizations'),
  getByID: (id) =>
    requests.get(`/account/${id}`),
}

const Country = {
  load: () => requests.get('/country'),
};
const State = {
  loadByCountry: (countryid) => requests.get(`/state/getbycountry/${countryid}`),
};
const Lga = {
  loadByState: (stateid) => requests.get(`/lga/getbystate/${stateid}`),
};

const JobVacancy = {
  save: (jobvacancy) =>
    requests.post('/jobvacancy', jobvacancy),
  load: (pageNumber) =>
    requests.get('/jobvacancy/applications/active', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/jobvacancy', pageNumber),
  view: (id) =>
    requests.get(`/jobvacancy/${id}`),
  edit: (id, jobvacancy) =>
    requests.put(`/jobvacancy/${id}`, jobvacancy),
  delete: (id) =>
    requests.del(`/jobvacancy/${id}`),
  approve: (id, approval) =>
    requests.put(`/jobvacancy/approve/${id}`, approval),
  reject: (id, rejection) =>
    requests.put(`/jobvacancy/reject/${id}`, rejection)

};

const Outlet = {
  save: (outlet) =>
    requests.post('/outlet', outlet),
  load: (pageNumber) =>
    requests.get('/outlet/apps/active', pageNumber),
  view: (id) =>
    requests.get(`/outlet/${id}`),
  edit: (id, outlet) =>
    requests.put(`/outlet/${id}`, outlet),
  delete: (id) =>
    requests.del(`/outlet/${id}`)
};


const Poll = {
  save: (poll) =>
    requests.post('/poll', poll),
  load: (pageNumber) =>
    requests.get('/poll', pageNumber),
  loadSetting: () =>
    requests.get('/poll/setting'),
  view: (id) =>
    requests.get(`/poll/${id}`),
  edit: (id, poll) =>
    requests.put(`/poll/${id}`, poll),
  delete: (id) =>
    requests.del(`/poll/${id}`)
};

const ScheduleMeeting = {
  save: (schedulemeeting) =>
    requests.post('/meeting/schedule-meeting', schedulemeeting),
  load: () =>
    requests.get('/meeting'),
  view: (id) =>
    requests.get(`/meeting/${id}`),
  edit: (id, schedulemeeting) =>
    requests.put(`/meeting/${id}`, schedulemeeting),
  startmeeting: (id, startmeeting) =>
    requests.put(`/meeting/start-meeting${id}`, startmeeting),
  endmeeting: (id, endmeeting) =>
    requests.put(`/meeting/end-meeting${id}`, endmeeting),
  delete: (id) =>
    requests.del(`/meeting/${id}`),
};

const Blog = {
  save: (blog) =>
    requests.post('/article', blog),
  load: (pageNumber) =>
    requests.get('/article/applications/active', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/article', pageNumber),
  view: (articleId) =>
    requests.get(`/article/${articleId}`),
  edit: (id, blog) =>
    requests.put(`/article/${id}`, blog),
  delete: (id) =>
    requests.del(`/article/${id}`),
  publish: (articleId) =>
    requests.put(`/article/${articleId}/publish`),
  reject: (articleId, reason) =>
    requests.put(`/article/${articleId}/reject`, reason),
  loadAllPublished: (pageNumber) =>
    requests.get('/article/published', pageNumber),
  loadByUser: (userId, pageNumber) =>
    requests.get(`/article/user/${userId}`, pageNumber),
  search: (pageNumber, search) =>
    requests.get(`/article/search?page=${pageNumber}&search=${search}`),
};

const Comment = {
  save: (articleId, comment) =>
    requests.post(`/article/${articleId}/comment/`, { message: comment }),
  edit: (articleId, commentId, comment) =>
    requests.put(`/article/${articleId}/comment/${commentId}`, { message: comment }),
  loadAll: (articleId, page, take) =>
    requests.get(`/article/${articleId}/comment`, page, take),
  view: (articleId, commentId) =>
    requests.get(`/article/${articleId}/comment/${commentId}`),
  delete: (articleId, commentId) =>
    requests.del(`/article/${articleId}/comment/${commentId}`),
  like: (articleId, commentId) =>
    requests.put(`/article/${articleId}/comment/${commentId}/like`),
  dislike: (articleId, commentId) =>
    requests.put(`/article/${articleId}/comment/${commentId}/dislike`),
}

const Category = {
  save: (category) =>
    requests.post('/category', category),
  load: (pageNumber) =>
    requests.get('/category/applications/active', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/category', pageNumber),
  view: (id) =>
    requests.get(`/category/${id}`),
  edit: (id, category) =>
    requests.put(`/category/${id}`, category),
  delete: (id) =>
    requests.del(`/category/${id}`),
  publish: (id, category) =>
    requests.put(`/category/approve/${id}`, category)
};

const EventType = {
  save: (eventtype) =>
    requests.post('/eventtype', eventtype),
  load: (pageNumber) =>
    requests.get('/eventtype/', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/eventtype', pageNumber),
  view: (id) =>
    requests.get(`/eventtype/${id}`),
  edit: (id, eventtype) =>
    requests.put(`/eventtype/${id}`, eventtype),
  delete: (id) =>
    requests.del(`/eventtype/${id}`),
  publish: (id, category) =>
    requests.put(`/category/approve/${id}`, category)
};

const Event = {
  save: (event) =>
    requests.post('/event', event),
  saveReg: (event) =>
    requests.post('/event/register', event),
  load: (pageNumber) =>
    requests.get('/event/myevent', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/event', pageNumber),
  loadByUser: (search, pageNumber) =>
    requests.get(`/event/myevent/?search=${search}&page=${pageNumber}`),
  view: (id) =>
    requests.get(`/event/${id}`),
  edit: (id, event) =>
    requests.put(`/event/${id}`, event),
  delete: (id) =>
    requests.del(`/event/${id}`),
  publish: (id, category) =>
    requests.put(`/event/publish/${id}`, category),
  loadAllPublished: (id, pageNumber) =>
    requests.get(`/event/published/${id}`, id, pageNumber),
  registration: (data) =>
    requests.post('/event/register', data),

};

const UserRegister = {
  load: (pageNumber) =>
    requests.get('/eventusers', pageNumber),
}





export default {

  Auth,
  User,
  Outlet,
  Sector,
  Account,
  Contact,
  Conversation,
  Country,
  State,
  Lga,
  JobVacancy,
  ScheduleMeeting,
  Poll,
  Blog,
  Category,
  Comment,
  EventType,
  Event,
  UserRegister,
  setToken: _token => { token = _token; },
};
