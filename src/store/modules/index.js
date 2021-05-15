import { combineReducers } from 'redux';
import auth from './auth';
import jobVacancy from './jobVacancy';
import notification from "./notification";
import account from './account';
import contact from './contact';
import outlet from "./outlet";
import blog from './blog';
import category from './category';
import comment from './comment';
import location from './location';
import poll from './poll';
import common from './common';
import conversation from './chat';
import error from './error';
import scheduleMeeting from './scheduleMeeting';
import eventType from './eventType';
import event from './event';


import { connectRouter } from 'connected-react-router';

const appReducer = (history) => combineReducers({
  router: connectRouter(history),
  common,
  error,
  auth,
  account,
  contact,
  conversation,
  outlet,
  blog,
  category,
  comment,
  notification,
  jobVacancy,
  location,
  poll,
  scheduleMeeting,
  eventType,
  event,
});

export default appReducer;